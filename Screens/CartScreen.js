import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";

const CartScreen = ({ route }) => {
  const cart = route.params;
  // console.log(cart);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => {
          // console.log(item);
          return (
            <View style={styles.view}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.innerview}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>
                  $ {numberWithCommas(item.price)}
                </Text>
                <Text style={{ color: "grey" }}>{item.desc}</Text>
              </View>
            </View>
          );
        }}
      />
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
    backgroundColor: "#e40102",
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
export default CartScreen;
