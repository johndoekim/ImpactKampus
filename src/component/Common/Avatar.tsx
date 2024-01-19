import {useEffect, useState} from 'react';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const OnOpenAvatar: React.FC = () => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{opacity: fadeAnim}}
      className="flex absolute z-0 -top-2 justify-start w-[288px] h-[480px] shadow-2xl border-black border bg-gray-200 rounded-2xl">
      <View className="top-4 ml-28">
        <Text className="text-xl">JohnDoe</Text>
        <Text className="text-xl">LV.1</Text>
      </View>
      <View className="flex-col top-10 ml-4 mr-4 border-Almondine border rounded-xl px-4">
        <View className="mt-2">
          <Text className="text-2xl">오늘의 수행현황</Text>
          <View className="ml-auto px-4 py-2">
            <Text className="text-lg">시스템 : 수행</Text>
            <Text className="text-lg">유저미션 : 수행</Text>
            <Text className="text-lg">미션 발의 개수 1/4</Text>
            <Text className="text-lg">미션 거절 횟수 1/4</Text>
          </View>
        </View>
        <View className="absolute ml-2 flex flex-col top-[272px]">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => console.log('설정')}>
            <Ionicons name="settings" size={30} color="#A78C7B" />
            <Text className="text-xl shadow-md ml-2">설정</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center mt-2"
            onPress={() => console.log('로그아웃')}>
            <AntDesign name="logout" size={30} color="#A78C7B" />
            <Text className="text-xl shadow-md ml-2">로그아웃</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

export const Avatar: React.FC = () => {
  const [openAvatar, setOpenAvatar] = useState(false);

  const toggleAvatar = () => {
    setOpenAvatar(!openAvatar);
  };

  return (
    <View>
      <TouchableOpacity className="ml-4 z-[1]" onPress={() => toggleAvatar()}>
        <Ionicons name="person-circle" size={70} color="#A78C7B" />
      </TouchableOpacity>

      {openAvatar ? <OnOpenAvatar /> : null}
    </View>
  );
};
