import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LocationPermission } from './components/LocationPermission';
import { NavigationScreen } from './components/NavigationScreen';
import { DestinationReached } from './components/DestinationReached';
import { conferenceRoute } from './data/routes';

type AppState =
  | 'WELCOME'
  | 'NAVIGATION_STARTED'
  | 'DESTINATION_REACHED';

export function App() {
  const [appState, setAppState] = useState<AppState>('WELCOME');
  const [showPermissionModal, setShowPermissionModal] = useState(false);

  const handleStart = () => {
    setShowPermissionModal(true);
  };

  const handlePermissionGranted = () => {
    setShowPermissionModal(false);
    setAppState('NAVIGATION_STARTED');
  };

  const handleRestart = () => {
    setAppState('NAVIGATION_STARTED');
  };

  return (
    <div className="app-viewport">
      {appState === 'WELCOME' && (
        <WelcomeScreen onComplete={handleStart} />
      )}

      {showPermissionModal && (
        <LocationPermission
          onPermissionGranted={handlePermissionGranted}
          onClose={() => setShowPermissionModal(false)}
        />
      )}

      {appState === 'NAVIGATION_STARTED' && (
        <NavigationScreen
          routeKeys={conferenceRoute}
          onDestinationReached={() => setAppState('DESTINATION_REACHED')}
          onRestart={handleRestart}
        />
      )}

      {appState === 'DESTINATION_REACHED' && (
        <DestinationReached onRestart={handleRestart} />
      )}
    </div>
  );
}

export default App;
