import {Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const MissionPaper: React.FC = () => {
  return (
    <>
      <View className="bg-HoneyYellow w-80 h-96">
        <View className="items-center mt-2 mx-2 border-x-2 border-t-2 border-Blueberry">
          <Text className="text-Blueberry text-3xl font-extrabold">
            R A D I O G R A M
          </Text>
          <Text className="text-Blueberry font-semibold">
            STANDARD AIR LINES INC.
          </Text>
        </View>
        <View className="justify-between flex-row mx-2 border-t-2 border-b-2 border-Blueberry">
          <View className="w-24 h-14 border-x-2 border-Blueberry">
            <Text className="font-light text-xs mx-1 mt-1 italic text-center text-Blueberry">
              RADIOGRAMS TO ALL PARTS of the WORLD
            </Text>
          </View>
          <Ionicons name="earth" size={54} color="#2C333E" />
          <View className="w-24 h-14 border-x-2 border-Blueberry">
            <Text className="font-light text-xs mx-1 mt-1 italic text-center text-Blueberry">
              SHIP TO SHORE SHORE TO SHIP
            </Text>
          </View>
        </View>
        <View className="mx-2 border-x-2 border-b-2 border-Blueberry">
          <View className="mx-2 mt-2">
            <Text className="text-xl text-Blueberry">TO Johndoe</Text>
            <Text className="mt-4 text-lg text-Blueberry">
              What is Lorem Ipsum?
            </Text>
            <Text className="mt-2 text-Blueberry">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </Text>
            <Text className="text-lg mt-10 mb-4 text-Blueberry">
              수행제한시각 : 2024-01-26-14:23
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
