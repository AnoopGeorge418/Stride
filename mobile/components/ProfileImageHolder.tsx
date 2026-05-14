import { Image } from "expo-image"
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native"

type ProfileImageHolderProps = {
  width?: number;
  height?: number;
  image: string;
  redirectTo?: string;
}

const ProfileImageHolder = ({ width = 50, height = 50, image,
} : ProfileImageHolderProps ) => {
  return (
    <TouchableOpacity onPress={() => router.push('/(tabs)/tasks')}>
      <View style={{ borderColor: 'green', borderWidth: 2, borderRadius: 100 }}>
        <Image source={image} style={{ width: width, height: height, borderRadius: width / 2 }} />
      </View>
    </TouchableOpacity>
  )
}

export default ProfileImageHolder
