import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image,
} from "react-native";
import Button from "./Components/Button";
export default function App() {
  const Data = ["Hamza", "Ali", "Fahad", "Azhar"];
  const renderItem = ({ item }) => {
    console.log(item);
    return <Button text={item} />;
  };
  return (
    // <View style={styles.abc}>
    <Image source={require("./Images/img.jpg")} />
    // </View>
  );
}
const styles = StyleSheet.create({
  abc: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
