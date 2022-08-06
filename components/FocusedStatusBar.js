import React from "react";
import { StatusBar, Text } from "react-native";
import { useIsFocused } from "@react-navigation/core";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
console.log(props, isFocused)
  return isFocused ? <StatusBar animated={true}  {...props} /> : null;
};

export default FocusedStatusBar;