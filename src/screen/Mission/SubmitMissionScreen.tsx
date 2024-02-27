import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {MissionPaper} from '../../component/Mission/MissonPaper';
import Toast from 'react-native-toast-message';
import MissionPlus from '../../../assets/Icons/Mission/PlusDark.svg';
import {PostMissionPaper} from '../../component/Mission/PostMissionPaper';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const SubmitMissionScreen: React.FC = () => {
  const dummyData = {
    nickname: '익명의 누군가',
    time: '2024-02-26-20:23',
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '제출 성공',
      text2: '이제 결과를 기다려 주세요',
    });
  };

  return (
    <>
      <SafeAreaView className="h-full bg-MainBg">
        <View className="flex justify-end mr-6 top-8 flex-row">
          <Avatar />
        </View>
        <View className='flex items-center top-20 justify-center"'>
          <PostMissionPaper
            nickname={dummyData.nickname}
            time={dummyData.time}
          />

          <View className="flex-row mt-2">
            <View className="mr-48">
              <FontAwesomeIcon name="photo" size={72} color="#58533D" />
            </View>
            <FontAwesomeIcon name="camera-retro" size={72} color="#58533D" />
          </View>

          <View className="mt-2">
            <TouchableOpacity
              className="bg-[#58533D] shadow-sm shadow-[#58533D] w-[345px] h-[60px] rounded-[8px] items-center flex-row justify-center"
              onPress={showToast}>
              <Text
                className="text-[#FFF8DC]
            text-[20px]
            font-bold
            font-NanumSquare
            my-4
            ml-2
            ">
                미션 수행 인증
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
