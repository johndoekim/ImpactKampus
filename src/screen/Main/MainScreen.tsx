import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export const MainScreen: React.FC = () => {
  return (
    <SafeAreaView className="h-full bg-Almondpeach">
      <View className="flex items-center">
        <Text>헤더</Text>
      </View>
      {/* 미션  영역 */}
      <View className="flex items-center top-48 justify-center">
        {/* 미션 봉투 영역 */}
        <View className="items-center shadow ">
          <TouchableOpacity onPress={() => console.log('메일 클릭')}>
            <Image
              className="rounded-2xl shadow-2xl"
              style={{width: 192, height: 131}}
              source={require('../../../assets/Images/waxSealedMail.png')}
            />

            {/* <EntypoIcon name="mail" size={192} color="#bca08d" /> */}
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
