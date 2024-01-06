import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import GoogleLogin from '../../../assets/Icons/Auth/Google/ios_neutral_rd_SI.svg';
import {Image} from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex h-full bg-Almondpeach">
      <View className="flex-1 justify-center">
        <View className="flex items-center">
          <TouchableOpacity
            className="mb-3"
            onPress={() => console.log('카카오 로그인')}>
            <Image
              className="rounded-xl"
              source={require('../../../assets/Icons/Auth/Kakao/kakao_ko_login_medium_narrow.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="mb-3"
            onPress={() => console.log('네이버 로그인')}>
            <View className="flex-row w-[183px] rounded-xl bg-[#03C75A]">
              <Image
                source={require('../../../assets/Icons/Auth/Naver/btnG.png')}
                style={{width: 45, height: 45}}
                className="rounded-xl"
              />
              <Text className="text-white font-semibold text-[15px] mt-3.5 ml-3.5">
                네이버 로그인
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="mb-3"
            onPress={() => console.log('구글 로그인')}>
            <GoogleLogin />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
