import React from 'react'
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


function CustomRadioBtn(props) {
    const { selected } = props
    return (
        <TouchableOpacity style={[styles.container, props.style]}>
            <Icon
                name={selected ? "radiobox-marked" : "radiobox-blank"}
                // onPress={() => setSelected(!selected)}
                style={styles.radioIcon}
            ></Icon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        backgroundColor: "transparent"
    },
    radioIcon: {
        color: "rgba(0,0,0,1)",
        fontSize: 16,
        lineHeight: 24
    }
});


export default CustomRadioBtn