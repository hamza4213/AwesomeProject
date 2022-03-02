import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Screen1 = ({ navigation }) => {
  useEffect(() => {
    axios.get(`https://blockchain.info/ticker`).then((response) => {
      console.log(response.data);
    });
  }, [name]);

  let a = 2;
  const [name, setName] = useState("Hamza");

  const [value, setValue] = useState(false);
  const [obj, setObj] = useState([
    {
      id: 0,
      name: "Hamza",
      email: "123@gmail.com",
      Marks: "10",
    },
    {
      id: 1,
      name: "Ali",
      email: "123@gmail.com",
      Marks: "100",
    },
  ]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}>
      <Text style={{ fontSize: 70 }}>{obj.email}</Text>
      <Text style={{ fontSize: 70 }}>{obj.name}</Text>
      <Text style={{ fontSize: 70 }}>{obj.Marks}</Text>
      {value ? <Text>Okay</Text> : null}
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        // onPress={() => setName("Ali")}
        style={{
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "teal",
        }}
      ></TouchableOpacity>
    </View>
  );
};

export default Screen1;
