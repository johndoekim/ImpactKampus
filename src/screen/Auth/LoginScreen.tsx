import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import GoogleLogin from '../../../assets/Icons/Auth/Google/ios_neutral_rd_SI.svg';
import {Image} from 'react-native';
import * as KakaoLogin from '@react-native-seoul/kakao-login';
import NaverLogin, {
  NaverLoginResponse,
  GetProfileResponse,
} from '@react-native-seoul/naver-login';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '../../navigator/AppStack';
import Toast from 'react-native-toast-message';

const LoginScreen: React.FC = () => {
  const StackNavi =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: '성공',
      text2: '로그인 성공 !',
    });
  };

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

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '371595956198-tbii8b0omdd85p02h5vnhhfaq7jkoho3.apps.googleusercontent.com',
    });
  }, []);

  const googlesignIn = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken, serverAuthCode} = await GoogleSignin.signIn();

    console.log('idToekn : ', idToken);

    console.log('serverAuthCode : ', serverAuthCode);
  };

  const kakaologin = () => {
    KakaoLogin.login()
      .then(result => {
        console.log('kakao Login Success', JSON.stringify(result));
        kakaogetProfile();
        StackNavi.navigate('main');
        showToast();
      })
      .catch(error => {
        if (error.code === 'E_CANCELLED_OPERATION') {
          console.log('kakao Login Cancel', error.message);
        } else {
          console.log(`kakao Login Fail(code:${error.code})`, error.message);
        }
      });
  };

  const kakaogetProfile = () => {
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
          <TouchableOpacity className="mb-3" onPress={() => kakaologin()}>
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

          <TouchableOpacity className="mb-3" onPress={() => googlesignIn()}>
            <GoogleLogin />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
