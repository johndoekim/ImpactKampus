import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {MissionPaper} from '../../component/Mission/MissonPaper';
import Toast from 'react-native-toast-message';
import Check from '../../../assets/Icons/Mission/Check.svg';
import X from '../../../assets/Icons/Mission/X.svg';
export const GetMissionScreen: React.FC = () => {
  const dummyData = {
    nickname: 'JoneDoe',
    title: 'What is Lorem Ipsum?',
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    time: '2024-01-26-14:23',
  };

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '수락',
      text2: '이제 미션을 수행해 주세요 👋',
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
              className="bg-[#58533D] w-[345px] h-[60px] rounded-[8px] items-center flex-row justify-center"
              onPress={showToast}>
              <Check />
              <Text
                className="text-[#FFF8DC]
            text-[20px]
            font-bold
            my-4
            ml-2
            ">
                미션 수락
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-MainBg mt-2 w-[345px] h-[60px] rounded-[8px] border-2 border-[#58533D] items-center flex-row justify-center"
              onPress={showToast}>
              <X />
              <Text
                className="text-[#FFF8DC]
            text-[20px]
            text-[#58533D]
            font-bold
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
