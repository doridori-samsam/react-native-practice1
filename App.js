import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hellooooo, this is Sam!!! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

//StyleSheet.create를 안쓰고 일반 객체로 써도 된다...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28,
    color: "orangered",
    textDecorationLine: "underline",
  },
});
