import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from '../../component/Common/Avatar';
import {MissionPaper} from '../../component/Mission/MissonPaper';

export const GetMissionScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView className="h-full bg-Almondpeach">
        <View className="flex top-8 flex-row">
          <Avatar />
        </View>
        <View className='flex items-center top-20 justify-center"'>
          <MissionPaper />
          <View className="mt-5">
            <TouchableOpacity
              className="bg-Quicksand w-40 rounded-xl items-center"
              onPress={() => console.log('미션 수락')}>
              <Text
                className="text-Pristine
            text-3xl 
            font-medium
            my-1.5">
                미션 수락
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-Quicksand mt-3 w-40 rounded-xl items-center"
              onPress={() => console.log('미션 거절')}>
              <Text
                className="text-Pristine
            text-3xl 
            font-medium
            my-1.5">
                미션 거절
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
