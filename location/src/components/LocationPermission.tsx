import React, { useState } from 'react';
import { AlertCircle, ShieldCheck, ArrowRight, X } from 'lucide-react';

interface LocationPermissionProps {
  onPermissionGranted: () => void;
  onClose?: () => void;
}

export const LocationPermission: React.FC<LocationPermissionProps> = ({
  onPermissionGranted,
  onClose
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
            setErrorMsg('Location permission was denied. Please enable location access in your browser or device settings.');
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
    <div className="permission-modal-backdrop" onClick={onClose}>
      <div
        className="permission-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="permission-modal-title"
      >
        {onClose && (
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={20} />
          </button>
        )}

        <h2 id="permission-modal-title" className="permission-modal-heading font-libre">
          Enable GPS Navigation
        </h2>

        <p className="permission-modal-subheading">
          Allow location access so we can guide you step-by-step from the campus entrance gate to the AI Campus conference hall.
        </p>

        <div className="privacy-pill">
          <ShieldCheck size={16} />
          <span>Used exclusively on-device for live walking guidance</span>
        </div>

        {errorMsg && (
          <div className="error-card">
            <AlertCircle size={18} className="error-icon" />
            <p>{errorMsg}</p>
          </div>
        )}

        <div className="permission-modal-actions">
          <button
            className="primary-btn"
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
