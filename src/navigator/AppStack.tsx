import {RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import AuthStack from './Stacks/AuthStack/AuthStack';
import {MainScreen} from '../screen/Main/MainScreen';

export type AppStackParamList = {
  authStack: undefined;
  main: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> =
  NativeStackNavigationProp<AppStackParamList, RouteName>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<
    AppStackParamList,
    RouteName
  >;
};

const {Screen, Navigator} = createNativeStackNavigator<AppStackParamList>();

const AppStack: React.FC = () => {
  return (
    <>
      <Navigator
        initialRouteName="authStack"
        screenOptions={{headerShown: false}}>
        <Screen name="authStack" component={AuthStack} />
        <Screen name="main" component={MainScreen} />
      </Navigator>
    </>
  );
};

export default AppStack;
