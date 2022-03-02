import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Screen2 = () => {
  const [name, setName] = useState("Hamza");
  useEffect(() => {
    console.log("UseEffect of Screen @ Called");

    return () => {
      console.log("UseEffect Return of Screen 2 called");
    };
  }, [name]);

  const storeData = async (value) => {
    console.log("Store Data Called");
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@name", jsonValue);
      console.log("Data Stores");
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const getData = async () => {
    console.log("Store Data Calles");
    try {
      const jsonValue = await AsyncStorage.getItem("@name");
      console.log(typeof jsonValue);
      setName(jsonValue);
      console.log(name);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  return (
    <View>
      <Text>{name}</Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate("Screen2")}
        onPress={() => storeData(name)}
        style={{
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "teal",
        }}
      >
        <Text>Set Data</Text>
      </TouchableOpacity>
      <View style={{ height: 70 }}></View>
      <TouchableOpacity
        // onPress={() => navigation.navigate("Screen2")}
        onPress={() => getData()}
        style={{
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "teal",
        }}
      >
        <Text>Get Data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;
