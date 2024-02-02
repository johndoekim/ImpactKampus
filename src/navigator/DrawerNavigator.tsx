import {createDrawerNavigator} from '@react-navigation/drawer';
import {AppStack} from '.';
import {OnOpenAvatar} from '../component/Common/OnOpenAvatar';

const Drawer = createDrawerNavigator();

export type DrawerParamList = {
  AppStack: undefined;
  OnOpenAvatar: undefined;
};

const DrawerNavigator: React.FC = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName="AppStack"
        screenOptions={{headerShown: false}}
        drawerContent={props => <OnOpenAvatar {...props} />}>
        <Drawer.Screen name="AppStack" component={AppStack} />
      </Drawer.Navigator>
    </>
  );
};

export default DrawerNavigator;
