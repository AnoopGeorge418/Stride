import { TextInput, TouchableOpacity, View, StyleSheet } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons"
import HolderContainer from "./HolderContainer"
import { useRef } from "react"

type SearchBarProps = {
  width?: number
  height?: number
  placeholder: string
  backgroundColor?: string
  textColor?: string
  value: string
  onChangeText: (text: string) => void
}

const SearchBar = ({
  width = 378,
  height = 55,
  backgroundColor = 'lightgray',
  textColor = 'gray',
  placeholder,
  value,
  onChangeText,
}: SearchBarProps) => {
  const inputRef = useRef<TextInput>(null)

  return (
    <View style={{ flexDirection: 'row', gap: 4 }}>
      {/* Tap the whole bar → focus the input */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => inputRef.current?.focus()}
        style={[styles.bar, { width, height, backgroundColor }]}
      >
        <Ionicons size={20} color={textColor} name="search" />

        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={textColor}
          style={[styles.input, { color: textColor }]}
          disableFullscreenUI={true}
          underlineColorAndroid="transparent"
        />
      </TouchableOpacity>

      <HolderContainer iconName="filter" />
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    gap: 8,
  },
  input: {
    flex: 1,          
    height: '100%',   
    fontFamily: 'playfair_Light',
    fontSize: 18,
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
})

export default SearchBar
