import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <View style={styles.title}>
        <Text style={{ fontSize: 25 }}>Sandwiches!</Text>
      </View>
      <View style={styles.heading}>
        <View style={styles.headingText}>
          <Text>Hello Apple</Text>
        </View>
        <View style={styles.headingText}>
          <Text>Eggplant</Text>
        </View>
        <View style={styles.headingText}>
          <Text>Hello Apple</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "#ffebcd",
  },
  headingText: {
    flex: 1,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: "6%",
  },
  title: {
    paddingVertical: "8%",
  },
});
