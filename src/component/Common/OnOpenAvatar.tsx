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

export const OnOpenAvatar: React.FC<DrawerContentComponentProps> = () => {
  const StackNavi =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <SafeAreaView>
      <View className="flex justify-start">
        <TouchableOpacity
          className="mt-8 items-center"
          onPress={() => console.log('프로필 사진 클릭')}>
          <Ionicons name="person-circle" size={70} color="#A78C7B" />
        </TouchableOpacity>
        <View className="top-4 items-center">
          <Text className="text-xl">JohnDoe</Text>
          <Text className="text-xl">LV.1</Text>
        </View>
        <View className="flex-col top-10 ml-4 mr-4 border-Almondine border rounded-xl px-2">
          <View className="py-4 items-center">
            <Text className="text-2xl">오늘의 수행현황</Text>
            <View className="mt-2">
              <Text className="text-lg">시스템 : 수행</Text>
              <Text className="text-lg">유저미션 : 수행</Text>
              <Text className="text-lg">미션 발의 개수 1/4</Text>
              <Text className="text-lg">미션 거절 횟수 1/4</Text>
            </View>
          </View>
        </View>
        <View className="flex ml-4 flex-col top-64">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => StackNavi.navigate('main')}>
            <Ionicons name="settings" size={30} color="#A78C7B" />
            <Text className="text-xl shadow-md ml-2">설정</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mt-4"
            onPress={() => StackNavi.navigate('authStack')}>
            <AntDesign name="logout" size={30} color="#A78C7B" />
            <Text className="text-xl shadow-md ml-2">로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
