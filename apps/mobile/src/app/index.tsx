import { Text, View } from "react-native";
import "./global.css";
 
const Index = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white p-4">
            <Text className="text-2xl font-bold text-blue-500 mb-4 bg-red-100 p-4 rounded-lg">
                Welcome to Expo React Native - Nativewind!
            </Text>
        </View>
    );
};

export default Index;
