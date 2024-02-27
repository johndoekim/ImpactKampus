import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {MissionPaper} from '../../component/Mission/MissonPaper';
import Toast from 'react-native-toast-message';
import Check from '../../../assets/Icons/Mission/Check.svg';
import X from '../../../assets/Icons/Mission/X.svg';
export const GetMissionScreen: React.FC = () => {
  const dummyData = {
    nickname: 'JoneDoe',
    title: '음식을 만들어봐요',
    content:
      '본인이 가장 좋아하는 음식을 만들고 혼자 먹어도 좋고, 친구와 함께 먹어도 좋아요.',
    time: '2024-02-26-20:23',
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '수락',
      text2: '이제 미션을 수행해 주세요',
    });
  };

  const showToast2 = () => {
    Toast.show({
      type: 'error',
      text1: '거절',
      text2: '다음에 또 만나요 👋',
    });
  };

  return (
    <>
      <SafeAreaView className="h-full bg-MainBg">
        <View className="flex justify-end mr-6 top-8 flex-row">
          <Avatar />
        </View>
        <View className='flex items-center top-20 justify-center"'>
          <MissionPaper
            nickname={dummyData.nickname}
            title={dummyData.title}
            content={dummyData.content}
            time={dummyData.time}
          />
          <View className="mt-12">
            <TouchableOpacity
              className="bg-[#58533D] shadow-sm shadow-[#58533D] w-[345px] h-[60px] rounded-[8px] items-center flex-row justify-center"
              onPress={showToast}>
              <Check />
              <Text
                className="text-[#FFF8DC]
            text-[20px]
            font-bold
            font-NanumSquare
            my-4
            ml-2
            ">
                미션 수락
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-MainBg shadow-md shadow-[#58533D] mt-2 w-[345px] h-[60px] rounded-[8px] border-2 border-[#58533D] items-center flex-row justify-center"
              onPress={showToast2}>
              <X />
              <Text
                className="
            text-[20px]
            text-[#58533D]
            font-bold
            font-NanumSquare
            my-4
            ml-2
            ">
                미션 거절
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
