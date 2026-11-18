import React, { useState } from 'react';
import { Compass, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';

interface LocationPermissionProps {
  onPermissionGranted: () => void;
}

export const LocationPermission: React.FC<LocationPermissionProps> = ({
  onPermissionGranted
}) => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const requestPermission = () => {
    setIsLoading(true);
    setErrorMsg(null);

    if (!('geolocation' in navigator)) {
      setErrorMsg('Geolocation is not supported by this browser.');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      () => {
        setIsLoading(false);
        onPermissionGranted();
      },
      (error) => {
        setIsLoading(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMsg('Location permission was denied. Please enable location access in your browser or phone settings.');
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMsg('GPS location is currently unavailable. Please verify your phone GPS is turned on.');
            break;
          case error.TIMEOUT:
            setErrorMsg('GPS request timed out. Please try again.');
            break;
          default:
            setErrorMsg('An unexpected error occurred while accessing GPS.');
            break;
        }
      },
      { timeout: 12000, enableHighAccuracy: true }
    );
  };

  return (
    <div className="screen-container permission-screen">
      <div className="permission-card">
        {/* Radar Compass Icon */}
        <div className="permission-radar-wrapper">
          <div className="radar-circle circle-1"></div>
          <div className="radar-circle circle-2"></div>
          <div className="radar-circle circle-3"></div>
          <div className="radar-core">
            <Compass size={38} className="radar-compass-icon" />
          </div>
        </div>

        <h1 className="screen-heading">Enable GPS Navigation</h1>
        <p className="screen-subheading">
          Allow location access so we can guide you step-by-step from the campus entrance gate to the AI Campus conference hall.
        </p>

        <div className="privacy-pill">
          <ShieldCheck size={16} />
          <span>Used exclusively on-device for live walking guidance</span>
        </div>

        {errorMsg && (
          <div className="error-card">
            <AlertCircle size={20} className="error-icon" />
            <p>{errorMsg}</p>
          </div>
        )}

        <div className="bottom-action">
          <button
            className="primary-btn pulse-glow"
            onClick={requestPermission}
            disabled={isLoading}
          >
            <span>{isLoading ? 'Requesting GPS Access...' : 'Allow Location & Start Navigation'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPermission;
