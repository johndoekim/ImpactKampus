import {useEffect, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {DrawerParamList} from '../../navigator/DrawerNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigator/AppStack';

type DrawerNavProp = DrawerNavigationProp<DrawerParamList>;

export const Avatar: React.FC = () => {
  const navigation = useNavigation<DrawerNavProp>();

  const toggleAvatar = () => {
    navigation.toggleDrawer();
  };

  return (
    <View>
      <TouchableOpacity className="ml-4 z-[1]" onPress={() => toggleAvatar()}>
        <Ionicons name="person-circle" size={70} color="#A78C7B" />
      </TouchableOpacity>
    </View>
  );
};
