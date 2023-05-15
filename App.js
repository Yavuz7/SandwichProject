import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Components/General/Header";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header>
          <HomePage />
        </Header>
        <StatusBar style="auto" hidden={true} />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffebcd",
  },
});
