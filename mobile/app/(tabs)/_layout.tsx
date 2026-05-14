import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        bottom: 30,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 50,
        paddingTop: 5,
        height: 65,
      }
    }}>

      {/*Home*/}
      <Tabs.Screen name="home" options={{
        title: "Home",
        tabBarLabelStyle: {
          fontFamily: 'playfair_Bold',
          fontSize: 12
        },
        tabBarIcon: ({ size, color, focused }) => <Ionicons size={size} color={color} name={focused ? 'home' : 'home-outline'} />
      }} />

      {/*Tasks and Habits*/}
      <Tabs.Screen name="tasks" options={{
        title: "Tasks",
        tabBarLabelStyle: {
          fontFamily: 'playfair_Bold',
          fontSize: 12
        },
        tabBarIcon: ({ size, color, focused }) => <Ionicons size={size} color={color} name={focused ? 'grid' : 'grid-outline'} />
      }} />

      {/*Ai*/}
      <Tabs.Screen name="strideAi" options={{
        title: "Stride Ai",
        tabBarLabelStyle: {
          fontFamily: 'playfair_Bold',
          fontSize: 12
        },
        tabBarIcon: ({ size, color, focused }) => <Ionicons size={size} color={color} name={focused ? 'sparkles' : 'sparkles-outline'} />
      }} />

      {/*Profile*/}
      <Tabs.Screen name="profile" options={{
        title: "Profile",
        tabBarLabelStyle: {
          fontFamily: 'playfair_Bold',
          fontSize: 12
        },
        tabBarIcon: ({ size, color, focused }) => <Ionicons size={size} color={color} name={focused ? 'person-circle' : 'person-circle-outline'} />
      }} />
      
    </Tabs>
  );
}
