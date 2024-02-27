import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AppStack} from './src/navigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigator/DrawerNavigator';
import Toast, {
  BaseToast,
  ErrorToast,
  ToastConfig,
} from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 17,
        fontWeight: '400',
        fontFamily: 'NanumSquare',
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: 'NanumSquare',
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: props => (
    <ErrorToast
      {...props}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: 17,
        fontWeight: '400',
        fontFamily: 'NanumSquare',
      }}
      text2Style={{
        fontSize: 15,
        fontFamily: 'NanumSquare',
      }}
    />
  ),
};
const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <SafeAreaProvider>
          <DrawerNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
};

export default App;
