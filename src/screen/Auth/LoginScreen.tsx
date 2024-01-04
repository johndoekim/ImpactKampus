import {SafeAreaView, Text, View} from 'react-native';

const LoginScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View className="mt-30 items-center justify-center">
        <Text className="text-2xl text-red-500">로그인 페이지</Text>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
