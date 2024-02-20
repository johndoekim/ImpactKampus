import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Avatar} from '../../component/Common/Avatar';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../../navigator/AppStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Envelope from '../../../assets/Icons/Mission/Envelope.svg';

export const MainScreen: React.FC = () => {
  const StackNavi =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <SafeAreaView className="h-full bg-MainBg">
      <View className="flex justify-end mr-6 top-8 flex-row">
        <View>
          <Avatar />
        </View>
      </View>
      {/* 미션  영역 */}
      <View className="flex items-center top-[220px] justify-center">
        {/* 미션 봉투 영역 */}
        <View className="items-center">
          <TouchableOpacity
            className="border-[#DBD2B5] border-[1px] rounded"
            onPress={() => StackNavi.navigate('getMission')}>
            <Envelope />
          </TouchableOpacity>
        </View>
        {/* 미션 버튼 영역 */}
        <View className="mt-5">
          <TouchableOpacity
            className="bg-Quicksand w-40 rounded-xl items-center "
            onPress={() => StackNavi.navigate('getMission')}>
            <Text
              className="
            text-Pristine
            text-3xl 
            font-medium
            my-1.5">
              미션 받기
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-Quicksand mt-3 w-40 rounded-xl items-center "
            onPress={() => StackNavi.navigate('suggestMission')}>
            <Text
              className="
            text-Pristine
            text-3xl 
            font-medium
            my-1.5">
              미션 생성
            </Text>
          </TouchableOpacity>
          {/* 
          <TouchableOpacity
            className="bg-Quicksand mt-3 w-40 rounded-xl items-center "
            onPress={() => StackNavi.navigate('submitMission')}>
            <Text
              className="
            text-Pristine
            text-3xl 
            font-medium
            my-1.5">
              미션 제출
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};
