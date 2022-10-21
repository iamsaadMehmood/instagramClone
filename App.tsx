import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider, StatusBar} from 'native-base';
import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MainNavigation from './app/navigation/MainNavigation';
import {navigationRef} from './app/services/navigationRef';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor={Colors.primary} />
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
