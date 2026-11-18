import React, { useEffect, useState } from 'react';
import type { GeolocationPosition } from '../services/geolocation';
import { geolocationService } from '../services/geolocation';
import { calculateDistance, formatDistance } from '../utils/distance';
import type { Coordinate } from '../data/coordinates';
import { campusLocations } from '../data/coordinates';
import { MapView } from './MapView';
import {
  Compass,
  CheckCircle2,
  ChevronRight,
  Navigation,
  SkipForward,
  RotateCcw
} from 'lucide-react';

// Distance in meters to consider a waypoint "reached"
const WAYPOINT_REACHED_DISTANCE = 15;

interface NavigationScreenProps {
  routeKeys: string[];
  onDestinationReached: () => void;
  onRestart: () => void;
}

export const NavigationScreen: React.FC<NavigationScreenProps> = ({
  routeKeys,
  onDestinationReached,
  onRestart
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentLocation, setCurrentLocation] = useState<GeolocationPosition | null>(null);
  const [distanceToNext, setDistanceToNext] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showProgressList, setShowProgressList] = useState(false);

  const waypoints: Coordinate[] = routeKeys.map(key => campusLocations[key]);
  const targetWaypoint = waypoints[currentStepIndex];

  useEffect(() => {
    geolocationService.startWatching(
      (position) => {
        setCurrentLocation(position);
        setError(null);

        if (targetWaypoint) {
          const dist = calculateDistance(
            position.latitude,
            position.longitude,
            targetWaypoint.latitude,
            targetWaypoint.longitude
          );

          setDistanceToNext(Math.round(dist));

          // Auto-advance waypoint when within radius
          if (dist <= WAYPOINT_REACHED_DISTANCE) {
            if (currentStepIndex < waypoints.length - 1) {
              setCurrentStepIndex(prev => prev + 1);
            } else {
              onDestinationReached();
            }
          }
        }
      },
      (err) => {
        console.error("GPS Error:", err);
        setError("GPS signal weak or unavailable. You can still navigate manually using the map.");
      }
    );

    return () => {
      geolocationService.stopWatching();
    };
  }, [currentStepIndex, targetWaypoint, waypoints.length, onDestinationReached]);

  const handleManualNextStep = () => {
    if (currentStepIndex < waypoints.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      onDestinationReached();
    }
  };

  return (
    <div className="nav-screen">
      {/* Top Header Card */}
      <div className="nav-header">
        <div className="nav-header-top">
          <div className="dept-pill">ICAIDIET'26 Venue</div>
          <span className="step-counter">
            Checkpoint {currentStepIndex + 1} / {waypoints.length}
          </span>
          <button className="back-btn" onClick={onRestart} title="Restart Navigation">
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>

        {targetWaypoint && (
          <div className="instruction-box">
            <div className="instruction-icon-wrapper">
              <Navigation size={22} className="instruction-icon" />
            </div>
            <div className="instruction-texts">
              <h2 className="instruction-title">{targetWaypoint.instruction}</h2>
              <div className="instruction-meta">
                <span className="waypoint-name">Towards: <strong>{targetWaypoint.name}</strong></span>
                {distanceToNext !== null && !error && (
                  <span className="distance-badge">
                    {formatDistance(distanceToNext)} away
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="nav-alert">
            <span>{error}</span>
          </div>
        )}
      </div>

      {/* Map Body with MapLibre GL */}
      <div className="nav-body">
        <MapView
          currentLocation={currentLocation}
          targetWaypoint={targetWaypoint}
          route={waypoints.slice(currentStepIndex)}
        />
      </div>

      {/* Bottom Floating Control Panel */}
      <div className="nav-footer">
        <div className="nav-footer-row">
          <button
            className="progress-toggle-btn"
            onClick={() => setShowProgressList(!showProgressList)}
          >
            <Compass size={16} />
            <span>{showProgressList ? "Hide Checkpoints" : "View All Checkpoints"}</span>
            <span className="step-tag">{waypoints.length - currentStepIndex} remaining</span>
          </button>

          <button
            className="skip-btn"
            onClick={handleManualNextStep}
            title="Next Checkpoint"
          >
            <span>{currentStepIndex === waypoints.length - 1 ? "Arrived" : "Next Step"}</span>
            <SkipForward size={14} />
          </button>
        </div>

        {/* Expandable Step-by-Step Waypoint Progress */}
        {showProgressList && (
          <div className="waypoint-drawer">
            <div className="drawer-header">
              <span>Campus Route to AI Campus</span>
            </div>
            <div className="waypoint-list">
              {waypoints.map((wp, index) => {
                const isCompleted = index < currentStepIndex;
                const isCurrent = index === currentStepIndex;

                return (
                  <div
                    key={wp.id}
                    className={`waypoint-row ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
                    onClick={() => setCurrentStepIndex(index)}
                  >
                    <div className="waypoint-status-icon">
                      {isCompleted ? (
                        <CheckCircle2 size={16} className="text-emerald-500" />
                      ) : isCurrent ? (
                        <span className="current-dot"></span>
                      ) : (
                        <span className="upcoming-dot">{index + 1}</span>
                      )}
                    </div>
                    <div className="waypoint-row-content">
                      <span className="waypoint-row-name">{wp.name}</span>
                      <span className="waypoint-row-desc">{wp.instruction}</span>
                    </div>
                    {isCurrent && <ChevronRight size={16} className="text-amber-500" />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationScreen;
