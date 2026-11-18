import React, { useEffect, useRef } from 'react';
import maplibregl, { Map, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { GeolocationPosition } from '../services/geolocation';
import type { Coordinate } from '../data/coordinates';
import { Locate, Navigation2 } from 'lucide-react';

interface MapViewProps {
  currentLocation: GeolocationPosition | null;
  targetWaypoint: Coordinate;
  route?: Coordinate[];
}

// 100% Free OpenStreetMap raster tiles (no API key required, zero watermark)
const FREE_MAP_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    'osm-tiles': {
      type: 'raster',
      tiles: [
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      ],
      tileSize: 256,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  layers: [
    {
      id: 'osm-tiles-layer',
      type: 'raster',
      source: 'osm-tiles',
      minzoom: 0,
      maxzoom: 19
    }
  ]
};

export const MapView: React.FC<MapViewProps> = ({
  currentLocation,
  targetWaypoint,
  route = []
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<Map | null>(null);
  const userMarkerRef = useRef<Marker | null>(null);
  const targetMarkerRef = useRef<Marker | null>(null);

  // Initialize MapLibre GL
  useEffect(() => {
    if (!mapContainerRef.current) return;

    const initialLng = targetWaypoint.longitude;
    const initialLat = targetWaypoint.latitude;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: FREE_MAP_STYLE,
      center: [initialLng, initialLat],
      zoom: 17,
      pitch: 35, // slight 3D perspective for natural navigation
      maxZoom: 19,
      minZoom: 13,
      attributionControl: false
    });

    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

    map.on('load', () => {
      // Add Route Line Source
      map.addSource('route-line', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: []
          }
        }
      });

      // Background glow for the route
      map.addLayer({
        id: 'route-line-casing',
        type: 'line',
        source: 'route-line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#ffbf00',
          'line-width': 8,
          'line-opacity': 0.8
        }
      });

      // Main route polyline
      map.addLayer({
        id: 'route-line-core',
        type: 'line',
        source: 'route-line',
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#0f172a',
          'line-width': 4,
          'line-dasharray': [2, 1]
        }
      });

      mapRef.current = map;
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update Route Polyline whenever location or route changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !map.isStyleLoaded()) return;

    const coords: [number, number][] = [];

    if (currentLocation) {
      coords.push([currentLocation.longitude, currentLocation.latitude]);
    }

    route.forEach(wp => {
      coords.push([wp.longitude, wp.latitude]);
    });

    const source = map.getSource('route-line') as maplibregl.GeoJSONSource | undefined;
    if (source) {
      source.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coords
        }
      });
    }
  }, [currentLocation, route]);

  // Update Target Marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!targetMarkerRef.current) {
      const el = document.createElement('div');
      el.className = 'custom-target-marker';
      el.innerHTML = `
        <div class="target-pin">
          <div class="target-pin-icon">📍</div>
          <div class="target-pin-pulse"></div>
        </div>
      `;

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([targetWaypoint.longitude, targetWaypoint.latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 25 }).setHTML(`
            <div style="font-family: sans-serif; padding: 4px;">
              <strong style="color: #0f172a; font-size: 13px;">${targetWaypoint.name}</strong>
              <p style="margin: 2px 0 0; color: #475569; font-size: 11px;">Target Waypoint</p>
            </div>
          `)
        )
        .addTo(map);

      targetMarkerRef.current = marker;
    } else {
      targetMarkerRef.current.setLngLat([targetWaypoint.longitude, targetWaypoint.latitude]);
    }
  }, [targetWaypoint]);

  // Update User Location Marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (!currentLocation) {
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }
      return;
    }

    if (!userMarkerRef.current) {
      const el = document.createElement('div');
      el.className = 'custom-user-marker';
      el.innerHTML = `
        <div class="user-beacon">
          <div class="user-beacon-core"></div>
          <div class="user-beacon-ring"></div>
        </div>
      `;

      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([currentLocation.longitude, currentLocation.latitude])
        .setPopup(
          new maplibregl.Popup({ offset: 15 }).setHTML(`
            <div style="font-family: sans-serif; padding: 4px;">
              <strong style="color: #0f172a; font-size: 12px;">You are here</strong>
            </div>
          `)
        )
        .addTo(map);

      userMarkerRef.current = marker;
    } else {
      userMarkerRef.current.setLngLat([currentLocation.longitude, currentLocation.latitude]);
    }
  }, [currentLocation]);

  // Auto-fit bounds
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    if (currentLocation && targetWaypoint) {
      const bounds = new maplibregl.LngLatBounds();
      bounds.extend([currentLocation.longitude, currentLocation.latitude]);
      bounds.extend([targetWaypoint.longitude, targetWaypoint.latitude]);

      map.fitBounds(bounds, {
        padding: { top: 70, bottom: 70, left: 50, right: 50 },
        maxZoom: 18,
        duration: 1200
      });
    } else if (targetWaypoint) {
      map.flyTo({
        center: [targetWaypoint.longitude, targetWaypoint.latitude],
        zoom: 17,
        duration: 1000
      });
    }
  }, [currentLocation, targetWaypoint]);

  const handleRecenter = () => {
    if (mapRef.current && currentLocation) {
      mapRef.current.flyTo({
        center: [currentLocation.longitude, currentLocation.latitude],
        zoom: 18,
        pitch: 45,
        duration: 1000
      });
    }
  };

  const handleResetNorth = () => {
    if (mapRef.current) {
      mapRef.current.resetNorthPitch({ duration: 600 });
    }
  };

  return (
    <div className="map-wrapper">
      <div ref={mapContainerRef} className="maplibre-container" />

      {/* Floating Map Controls */}
      <div className="map-floating-controls">
        <button
          className="map-control-btn"
          onClick={handleRecenter}
          title="Center on my location"
          disabled={!currentLocation}
        >
          <Locate size={18} />
        </button>
        <button
          className="map-control-btn"
          onClick={handleResetNorth}
          title="Reset North orientation"
        >
          <Navigation2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default MapView;
