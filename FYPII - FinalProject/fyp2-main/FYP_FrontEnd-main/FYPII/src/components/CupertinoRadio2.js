import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function CupertinoRadio2(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon
        name={props.selected ? "ios-radio-button-on" : "ios-radio-button-off"}
        style={[
          styles.radioIcon,
          {
            color: props.selected ? "#007AFF" : "rgba(0,0,0,1)"
          }
        ]}
      ></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "transparent"
  },
  radioIcon: {
    fontSize: 16
  }
});

export default CupertinoRadio2;
