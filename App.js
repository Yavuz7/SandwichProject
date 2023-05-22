import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "./Components/General/Header";
import HomeScreen from "./Pages/HomeScreen";
import SandwichScreen from "./Pages/SandwichScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: (props) => <Header {...props} /> }}
        />
        <Stack.Screen name="SandwichCreator" component={SandwichScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}
