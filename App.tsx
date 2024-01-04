import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, Text} from 'react-native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Text className="text-3xl text-black">메인</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
