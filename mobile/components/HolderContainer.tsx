import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native"

type HolderContainerProps = {
  width?: number;
  height?: number;
  redirectTo?: string;
  iconName: keyof typeof Ionicons.glyphMap;
}

const HolderContainer = ({ width = 45, height = 55, iconName
} : HolderContainerProps ) => {
  return (
    <TouchableOpacity onPress={() => router.push('/(tabs)/tasks')}>
      <View style={{ borderRadius: 12, width: width, height: height, backgroundColor: 'lightgray', justifyContent: "center", alignItems: "center" }}>
        <Ionicons size={16} color={'gray'} name={iconName} />
      </View>
    </TouchableOpacity>
  )
}

export default HolderContainer
