import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type MissionPaperProps = {
  nickname: string;
  title: string;
  content: string;
  time: string;
};

export const MissionPaper: React.FC<MissionPaperProps> = ({
  nickname,
  title,
  content,
  time,
}) => {
  return (
    <>
      <View className="bg-white w-[345px] h-[400px] rounded border-[1px] border-[#DBD2B5]">
        <View className="ml-8 mt-6">
          <Text className="text-[16px]">발신자</Text>
          <Text className="text-[16px]">미션 기한</Text>
          <Text className="text-[16px]">수취인</Text>
        </View>
        <View className="items-center justify-center mx-12 mt-20">
          <Text className="text-xl text-center">
            오늘의 미션은 맛있는 음식 요리하기 입니다. 내 손으로 음식을 만들어
            가족이나 친구와 맛있는 식사를 즐기세요
          </Text>
        </View>
      </View>
    </>
  );
};
