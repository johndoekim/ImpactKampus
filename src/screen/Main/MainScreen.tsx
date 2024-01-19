import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Avatar} from '../../component/Common/Avatar';

export const MainScreen: React.FC = () => {
  return (
    <SafeAreaView className="h-full bg-Almondpeach">
      <View className="flex top-8 flex-row">
        <View>
          <Avatar />
        </View>
      </View>
      {/* 미션  영역 */}
      <View className="flex items-center top-28 justify-center">
        {/* 미션 봉투 영역 */}
        <View className="items-center">
          <TouchableOpacity onPress={() => console.log('메일 클릭')}>
            <EntypoIcon name="mail" size={192} color="#bca08d" />
          </TouchableOpacity>
        </View>
        {/* 미션 버튼 영역 */}
        <View className="mt-5">
          <TouchableOpacity
            className="bg-Quicksand w-40 rounded-xl items-center "
            onPress={() => console.log('미션 받기')}>
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
            onPress={() => console.log('미션 생성')}>
            <Text
              className="
            text-Pristine
            text-3xl 
            font-medium
            my-1.5">
              미션 생성
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
