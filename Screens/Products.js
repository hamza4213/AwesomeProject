import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Products = ({ navigation }) => {
  const [cart, setCart] = useState([]);
  let arr = [
    {
      price: 12345,
      title: "Car Mart",
      image: "https://i.ibb.co/dLV7DFs/carmart-logo-1.png",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      price: 8945,
      title: "New Car",
      image: "https://i.ibb.co/mzqHfgQ/download.jpg",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      price: 894567,
      title: "Car Repair",
      image: "https://i.ibb.co/MDND5Mb/repair1.png",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      price: 908316,
      title: "Car Wash Service",
      image: "https://i.ibb.co/hL0R4Kz/FirstCar.png",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
    {
      price: 6782316,
      title: "Car Ac Service",
      image: "https://i.ibb.co/0VqjNxd/Cooling-Coil.png",
      desc: "Lorem Ipsum is simply dummy text of the printing.",
    },
  ];
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={arr}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          // console.log(item);
          let disabled = cart.find(({ price }) => price === item.price);
          console.log(disabled);
          return (
            <View style={styles.view}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.innerview}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>
                  $ {numberWithCommas(item.price)}
                </Text>
                <Text style={{ color: "grey" }}>{item.desc}</Text>
                <TouchableOpacity
                  disabled={disabled}
                  onPress={() => setCart([...cart, item])}
                  style={[
                    styles.touchableOpacity,
                    { backgroundColor: disabled ? "grey" : "#e40102" },
                  ]}
                >
                  <Text style={{ color: "#fff" }}>Add to Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("CartScreen", cart)}
        style={styles.button}
      >
        <Text style={{ color: "#fff" }}>Show Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    // backgroundColor: "teal",
  },
  view: {
    flexDirection: "row",
    width: "90%",
    height: 160,
    alignSelf: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: "#fff",
    shadowOffset: { width: 100, height: 50 },
    shadowColor: "#000",
    shadowOpacity: 1,
    elevation: 3,
    marginVertical: 10,
  },
  image: { width: "50%", height: "80%", borderRadius: 10 },
  innerview: { width: "50%", height: "100%", padding: 10 },
  text: { color: "#e40102", fontSize: 15, fontWeight: "bold" },
  touchableOpacity: {
    marginVertical: 5,
    width: "65%",
    height: 40,
    borderRadius: 15,
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: 80,
    backgroundColor: "#e40102",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // bottom: "10%",
    alignSelf: "center",
  },
});
export default Products;
