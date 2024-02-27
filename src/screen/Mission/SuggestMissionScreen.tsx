import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {MissionPaper} from '../../component/Mission/MissonPaper';
import Toast from 'react-native-toast-message';
import MissionPlus from '../../../assets/Icons/Mission/PlusDark.svg';
import {PostMissionPaper} from '../../component/Mission/PostMissionPaper';

export const SuggestMissionScreen: React.FC = () => {
  const dummyData = {
    nickname: '익명의 누군가',
    title: '음식을 만들어봐요',
    content:
      '본인이 가장 좋아하는 음식을 만들고 혼자 먹어도 좋고, 친구와 함께 먹어도 좋아요.',
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

          <View className="mt-12">
            <TouchableOpacity
              className="bg-[#58533D] shadow-sm shadow-[#58533D] w-[345px] h-[60px] rounded-[8px] items-center flex-row justify-center"
              onPress={showToast}>
              <MissionPlus />
              <Text
                className="text-[#FFF8DC]
            text-[20px]
            font-bold
            font-NanumSquare
            my-4
            ml-2
            ">
                미션 생성
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
