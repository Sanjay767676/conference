export interface GeolocationPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
  heading: number | null;
  speed: number | null;
}

export interface GeolocationError {
  code: number;
  message: string;
}

type SuccessCallback = (position: GeolocationPosition) => void;
type ErrorCallback = (error: GeolocationError) => void;

export class GeolocationService {
  private watchId: number | null = null;

  startWatching(onSuccess: SuccessCallback, onError: ErrorCallback) {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation is not supported by your browser.',
      });
      return;
    }

    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        onSuccess({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
        });
      },
      (error) => {
        onError({
          code: error.code,
          message: error.message,
        });
      },
      {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 12000,
      }
    );
  }

  stopWatching() {
    if (this.watchId !== null) {
      navigator.geolocation.clearWatch(this.watchId);
      this.watchId = null;
    }
  }
}

export const geolocationService = new GeolocationService();
