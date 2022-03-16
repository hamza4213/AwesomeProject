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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import Products from "./Screens/Products";
import CartScreen from "./Screens/CartScreen";
export default function App() {
  const Data = ["Hamza", "Ali", "Fahad", "Azhar"];
  const renderItem = ({ item }) => {
    console.log(item);
    return <Button text={item} />;
  };
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
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
