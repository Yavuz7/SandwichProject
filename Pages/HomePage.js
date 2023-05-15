import { FlatList, Text, View, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.newSandwich}>
      <FlatList
        data={[
          { key: "Create a Sandwich!" },
          { key: "Saved Sandwich 1" },
          { key: "Saved Sandwich 2" },
          { key: "Saved Sandwich 3" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item.key}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  newSandwich: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 0.1,
    height: "7%",
    width: "100%",
  },
  itemContainer: {
    alignSelf: "stretch",
  },
  item: {
    textAlign: "center",
    fontSize: 18,
    paddingVertical: "5%",
    marginVertical: 0.2,
    borderWidth: 1,
    backgroundColor: "#fff",
    flex: 1,
  },
});
