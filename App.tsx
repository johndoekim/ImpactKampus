import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AppStack} from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
