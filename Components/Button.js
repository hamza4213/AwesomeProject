import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
const Button = (props) => {
  //   console.log(props);
  const { click, text } = props;
  return (
    <TouchableOpacity
      onPress={click}
      style={{ width: "50%", height: 70, backgroundColor: "yellow" }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
export default Button;
