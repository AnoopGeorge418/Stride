import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

import ProfileImageHolder from "@/components/ProfileImageHolder";
import { CalenderStrip } from "@/components/Calender";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

const Tasks = () => {

  const [query, setQuery] = useState("")
  
  const username = "Anoop";
  const imageFromCdn = "https://i.pinimg.com/736x/72/4b/26/724b2657664667d115d5d2d899111533.jpg";

  const formatedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <View style={{ flex: 1, marginTop: 40, paddingHorizontal: 20 }} >
      
      {/* Header */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }} >

        {/* Left Section */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12, }}>
          <ProfileImageHolder image={imageFromCdn} />
          <View>
            <Text
              style={{ fontFamily: "playfairDisplay_Medium", fontSize: 28, color: "#000", }} >
              Morning, {username}!
            </Text>
            <Text
              style={{ fontFamily: "playfair_Medium", fontSize: 16, color: "#777", marginTop: 2, }} >
              {formatedDate}
            </Text>
          </View>
        </View>

        {/* Right Section */}
        <TouchableOpacity style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: "lightgray", justifyContent: "center", alignItems: "center", }} onPress={() => router.push('/(tabs)/tasks')} >
          <Ionicons
            name="notifications"
            size={20}
            color="black"
          />
        </TouchableOpacity>
        
      </View>

      {/*Calender*/}
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <SearchBar placeholder="Search for tasks, habits and more..." value={query} onChangeText={setQuery}/>
        <CalenderStrip />
      </View>

    </View>
  );
};

export default Tasks;
