import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AppStack} from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import Toast from 'react-native-toast-message';

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <DrawerNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
