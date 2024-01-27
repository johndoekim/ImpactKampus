import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {PostMissionPaper} from '../../component/Mission/PostMissionPaper';
import {useState} from 'react';
import Toast from 'react-native-toast-message';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const SubmitMissionScreen: React.FC = () => {
  const dummyData = {
    nickname: 'Anonymous',
    time: '2024-01-26-14:23',
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '제출 성공',
      text2: '심사를 기다려주세요',
    });
  };
  return (
    <>
      <SafeAreaView className="h-full bg-Almondpeach">
        <View className="flex top-8 flex-row">
          <Avatar />
        </View>
        <View className='flex items-center top-20 justify-center"'>
          <PostMissionPaper
            nickname={dummyData.nickname}
            time={dummyData.time}
          />
          <View className="mt-2">
            <View className="items-center mb-2">
              <FontAwesomeIcon name="photo" size={72} color="#bca08d" />
            </View>

            <TouchableOpacity
              className="bg-Quicksand w-40 rounded-xl items-center"
              onPress={showToast}>
              <Text
                className="text-Pristine
              text-3xl 
              font-medium
              my-1.5">
                미션 제출
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
