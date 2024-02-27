import {Image, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Seal from '../../../assets/Icons/Mission/Seal.svg';

type PostMissionPaperProps = {
  nickname: string;
  time: string;
};

export const PostMissionPaper: React.FC<PostMissionPaperProps> = ({
  nickname,
  time,
}) => {
  return (
    <>
      <View className="bg-white w-[345px] h-[400px] rounded border-[1px] border-[#DBD2B5] shadow-md shadow-[#DBD2B5]">
        <View className="ml-8 mt-6">
          <View className="flex-row items-center">
            <Text className="text-[16px] font-NanumSquare text-MissionTextCol">
              수신자
            </Text>
            <Text className="text-[16px] font-Orbit text-MissionCol ml-8">
              {nickname}
            </Text>
          </View>
          <View className="flex-row items-center my-2">
            <Text className="text-[16px] font-NanumSquare text-MissionTextCol">
              미션 기한
            </Text>
            <Text className="text-[16px] font-Orbit text-MissionCol ml-3.5">
              {time}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-[16px] font-NanumSquare text-MissionTextCol">
              제목
            </Text>
            <TextInput
              className="text-[16px] font-Orbit text-MissionCol ml-12"
              placeholder="제목을 입력하세요"
              placeholderTextColor={'#89836C'}
            />
          </View>
        </View>

        <View className="items-center justify-center mx-12 mt-12">
          <TextInput
            className="text-xl text-center font-Orbit text-MissionCol"
            placeholder="내용을 입력하세요"
            multiline={true}
            placeholderTextColor={'#89836C'}
          />
        </View>
        <View className="-top-12 ml-auto">
          <Image
            source={require('../../../assets/Icons/Mission/Seal.png')}
            style={{width: 142, height: 142}}
          />
        </View>
      </View>
    </>
  );
};
