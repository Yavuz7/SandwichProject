import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <>
      <View style={styles.title}>
        <Text style={{ fontSize: 25, borderBottomWidth: 5 }}>
          Sandwich Shaker!
        </Text>
        <Text style={{ fontSize: 15 }}>Your Sandwiches</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    alignSelf: "center",
    backgroundColor: "#fff",
  },
});
