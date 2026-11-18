import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { LocationPermission } from './components/LocationPermission';
import { NavigationScreen } from './components/NavigationScreen';
import { DestinationReached } from './components/DestinationReached';
import { conferenceRoute } from './data/routes';

type AppState =
  | 'WELCOME'
  | 'LOCATION_PERMISSION'
  | 'NAVIGATION_STARTED'
  | 'DESTINATION_REACHED';

export function App() {
  const [appState, setAppState] = useState<AppState>('WELCOME');

  const handleRestart = () => {
    setAppState('NAVIGATION_STARTED');
  };

  return (
    <div className="app-viewport">
      {appState === 'WELCOME' && (
        <WelcomeScreen onComplete={() => setAppState('LOCATION_PERMISSION')} />
      )}

      {appState === 'LOCATION_PERMISSION' && (
        <LocationPermission
          onPermissionGranted={() => setAppState('NAVIGATION_STARTED')}
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
