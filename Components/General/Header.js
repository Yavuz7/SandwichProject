import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <>
      <View style={styles.title}>
        <Text
          style={{ fontSize: 25, borderBottomWidth: 5, alignSelf: "center" }}
        >
          Sandwich Shaker!
        </Text>
        <Text style={{ fontSize: 15, alignSelf: "center" }}>
          Your Sandwiches
        </Text>
      </View>
      {props.children}
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    height: "15%",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    width: "100%",
    borderBottomWidth: 2,
  },
});
