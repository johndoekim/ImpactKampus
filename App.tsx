import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AppStack} from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigator/DrawerNavigator';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DrawerNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
