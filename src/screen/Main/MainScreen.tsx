import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Avatar} from '../../component/Common/Avatar';
import {useNavigation} from '@react-navigation/native';
import {AppStackParamList} from '../../navigator/AppStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Envelope from '../../../assets/Icons/Mission/Envelope.svg';
import MissionPlus from '../../../assets/Icons/Mission/Plus.svg';
import Logo from '../../../assets/Icons/Etc/Logo.svg';
import {useEffect, useState} from 'react';

type ScreenStatusType =
  | 'getMission'
  | 'whileMission'
  | 'afterBasicMission'
  | 'suggestMission';

export const MainScreen: React.FC = () => {
  const StackNavi =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const [ScreenStatus, setScreenStatus] = useState<ScreenStatusType>(
    'getMission' || 'whileMission' || 'afterBasicMission' || 'suggestMission',
  );

  const handleScreenStatus = (status: ScreenStatusType) => {
    setScreenStatus(status);
  };

  useEffect(() => {
    handleScreenStatus('afterBasicMission');
  }, []);

  return (
    <SafeAreaView className="h-full bg-MainBg">
      <View className="flex justify-end mr-6 top-8 flex-row">
        <View>
          <Avatar />
        </View>
      </View>

      {/* 미션  영역 */}
      {/* 미션 알림 */}
      <View className="top-28 items-center">
        {ScreenStatus === 'getMission' && (
          <Text className="text-[#3A3521] text-[24px] font-bold font-NanumSquare ">
            새로운 미션이 도착했어요!
          </Text>
        )}
      </View>
      <View className="flex items-center top-[180px] justify-center">
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
            className="items-center "
            onPress={() => StackNavi.navigate('getMission')}>
            <Text
              className="
            text-[#3A3521]
            mt-10
            opacity-60
            text-[16px] font-NanumSquare">
              {ScreenStatus === 'getMission' &&
                '편지를 눌러 미션을 확인해보세요'}

              {ScreenStatus === 'afterBasicMission' &&
                '다른 사용자에게 미션을 제안해보세요'}

              {ScreenStatus === 'whileMission' && '미션을 수행해 주세요'}
            </Text>
          </TouchableOpacity>

          {ScreenStatus === 'afterBasicMission' && (
            <TouchableOpacity
              className="flex-row mt-44 justify-center"
              onPress={() => StackNavi.navigate('suggestMission')}>
              <MissionPlus />

              <Text
                className="
            text-[#58533D]
            text-[16px]
            font-bold
            my-0.5      
            ml-1
            font-NanumSquare
            ">
                미션 생성하기
              </Text>
            </TouchableOpacity>
          )}

          {ScreenStatus === 'whileMission' && (
            <TouchableOpacity
              className="flex-row mt-44 justify-center"
              onPress={() => StackNavi.navigate('submitMission')}>
              <FontAwesome name="send" size={24} color="#58533D" />

              <Text
                className="
            text-[#58533D]
            text-[16px]
            font-bold
            my-0.5      
            ml-1
            font-NanumSquare
            ">
                미션 결과 제출
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
