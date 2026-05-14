import { TextInput, TouchableOpacity, View } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
import HolderContainer from "./HolderContainer";

type SearchBarProps = {
  width?: number;
  height?: number;
  placeholder: string;
  backgroundColor?: string;
  textColor?: string;
}

const SearchBar = ({ width = 378, height = 44, backgroundColor = 'lightgray', textColor = 'gray', placeholder } : SearchBarProps ) => {
  return (
    <View style= {{ display: 'flex', flexDirection: 'row', gap: 4 }}>
      <TouchableOpacity style={{ width: width, height: height, backgroundColor: backgroundColor, borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10}}>
        <TextInput placeholder={placeholder} placeholderTextColor={textColor} style={{ fontFamily: 'playfair_Regular', fontSize: 14 }} />
        <Ionicons size={16} color={'gray'} name="search" />
      </TouchableOpacity>

      <HolderContainer iconName="filter"/>
    </View>
   
  )
}

export default SearchBar;
