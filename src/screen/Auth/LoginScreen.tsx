import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import GoogleLogin from '../../../assets/Icons/Auth/Google/ios_neutral_rd_SI.svg';
import {Image} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';

const LoginScreen: React.FC = () => {
  const naverlogin = async () => {
    const consumerKey = 'ggx4fjxjcjcKmOMSPVxd';
    const consumerSecret = 'R7dUXdx8CB';
    const appName = 'impactKampus';
    const serviceUrlScheme = 'impactKampus';

    const {failureResponse, successResponse} = await NaverLogin.login({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlScheme,
    });
    console.log('naver', successResponse);
    console.log('naver', failureResponse);
  };

  const login = () => {
    KakaoLogin.login()
      .then(result => {
        console.log('kakao Login Success', JSON.stringify(result));
        getProfile();
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('kakao Login Cancel', error.message);
        } else {
          console.log(`kakao Login Fail(code:${error.code})`, error.message);
        }
      });
  };

  const getProfile = () => {
    KakaoLogin.getProfile()
      .then(result => {
        console.log('GetProfile Success', JSON.stringify(result));
      })
      .catch(error => {
        console.log(`GetProfile Fail(code:${error.code})`, error.message);
      });
  };

  return (
    <SafeAreaView className="flex h-full bg-Almondpeach">
      <View className="flex-1 justify-center">
        <View className="flex items-center">
          <TouchableOpacity className="mb-3" onPress={() => login()}>
            <Image
              className="rounded-xl"
              source={require('../../../assets/Icons/Auth/Kakao/kakao_ko_login_medium_narrow.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity className="mb-3" onPress={() => naverlogin()}>
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
