import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { GeolocationPosition } from '../services/geolocation';
import type { Coordinate } from '../data/coordinates';
import { Locate, Maximize2 } from 'lucide-react';

interface MapViewProps {
  currentLocation: GeolocationPosition | null;
  targetWaypoint: Coordinate;
  route?: Coordinate[];
}

export const MapView: React.FC<MapViewProps> = ({
  currentLocation,
  targetWaypoint,
  route = []
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const userMarkerRef = useRef<L.Marker | null>(null);
  const targetMarkerRef = useRef<L.Marker | null>(null);
  const routeLineRef = useRef<L.Polyline | null>(null);
  const isInitialCenterDone = useRef<boolean>(false);

  // Initialize Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Create Leaflet map centered at target waypoint
    const map = L.map(mapContainerRef.current, {
      center: [targetWaypoint.latitude, targetWaypoint.longitude],
      zoom: 17,
      zoomControl: false,
      attributionControl: false
    });

    // Add 100% free OpenStreetMap tile layer (no API key, zero watermarks)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 13,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Attribution control bottom-right
    L.control.attribution({ position: 'bottomright', prefix: false }).addTo(map);

    // Add zoom control top-left
    L.control.zoom({ position: 'topleft' }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      userMarkerRef.current = null;
      targetMarkerRef.current = null;
      routeLineRef.current = null;
    };
  }, []);

  // Update Route Polyline
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const latLngs: [number, number][] = [];

    if (currentLocation) {
      latLngs.push([currentLocation.latitude, currentLocation.longitude]);
    }

    route.forEach(wp => {
      latLngs.push([wp.latitude, wp.longitude]);
    });

    if (routeLineRef.current) {
      routeLineRef.current.setLatLngs(latLngs);
    } else if (latLngs.length > 0) {
      // Clean dark dashed polyline with NO yellow border
      const polyline = L.polyline(latLngs, {
        color: '#0f172a',
        weight: 4.5,
        dashArray: '6, 8',
        opacity: 0.9,
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(map);

      routeLineRef.current = polyline;
    }
  }, [currentLocation, route]);

  // Update Target Waypoint Marker
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const targetIcon = L.divIcon({
      className: 'custom-target-marker',
      html: `
        <div class="target-pin">
          <div class="target-pin-icon">📍</div>
          <div class="target-pin-pulse"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 26],
      popupAnchor: [0, -26]
    });

    if (targetMarkerRef.current) {
      targetMarkerRef.current.setLatLng([targetWaypoint.latitude, targetWaypoint.longitude]);
      targetMarkerRef.current.setPopupContent(`
        <div style="font-family: sans-serif; padding: 4px;">
          <strong style="color: #0f172a; font-size: 13px;">${targetWaypoint.name}</strong>
          <p style="margin: 2px 0 0; color: #475569; font-size: 11px;">Target Checkpoint</p>
        </div>
      `);
    } else {
      const marker = L.marker([targetWaypoint.latitude, targetWaypoint.longitude], {
        icon: targetIcon,
        zIndexOffset: 500
      })
        .bindPopup(`
          <div style="font-family: sans-serif; padding: 4px;">
            <strong style="color: #0f172a; font-size: 13px;">${targetWaypoint.name}</strong>
            <p style="margin: 2px 0 0; color: #475569; font-size: 11px;">Target Checkpoint</p>
          </div>
        `)
        .addTo(map);

      targetMarkerRef.current = marker;
    }
  }, [targetWaypoint]);

  // Update User Location Marker (without snapping the camera away!)
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

    const userLatLng: [number, number] = [currentLocation.latitude, currentLocation.longitude];

    const userIcon = L.divIcon({
      className: 'custom-user-marker',
      html: `
        <div class="user-beacon">
          <div class="user-beacon-core"></div>
          <div class="user-beacon-ring"></div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -16]
    });

    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng(userLatLng);
    } else {
      const marker = L.marker(userLatLng, {
        icon: userIcon,
        zIndexOffset: 1000
      })
        .bindPopup(`
          <div style="font-family: sans-serif; padding: 4px;">
            <strong style="color: #0f172a; font-size: 12px;">You are here</strong>
          </div>
        `)
        .addTo(map);

      userMarkerRef.current = marker;
    }

    // Only auto-center on user ONCE upon initial GPS fix so map does NOT jump while walking
    if (!isInitialCenterDone.current) {
      isInitialCenterDone.current = true;
      const bounds = L.latLngBounds([userLatLng, [targetWaypoint.latitude, targetWaypoint.longitude]]);
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 18, animate: true });
    }
  }, [currentLocation, targetWaypoint]);

  // Recenter explicitly on user location
  const handleRecenter = () => {
    if (mapRef.current && currentLocation) {
      mapRef.current.setView([currentLocation.latitude, currentLocation.longitude], 18, {
        animate: true
      });
    }
  };

  // Fit whole route & target in view
  const handleFitRoute = () => {
    if (!mapRef.current) return;
    const points: [number, number][] = [];
    if (currentLocation) {
      points.push([currentLocation.latitude, currentLocation.longitude]);
    }
    points.push([targetWaypoint.latitude, targetWaypoint.longitude]);
    route.forEach(r => points.push([r.latitude, r.longitude]));

    if (points.length > 0) {
      mapRef.current.fitBounds(L.latLngBounds(points), {
        padding: [60, 60],
        maxZoom: 18,
        animate: true
      });
    }
  };

  return (
    <div className="map-wrapper">
      <div ref={mapContainerRef} className="leaflet-map-container" style={{ width: '100%', height: '100%' }} />

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
          onClick={handleFitRoute}
          title="Fit full route in view"
        >
          <Maximize2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default MapView;
