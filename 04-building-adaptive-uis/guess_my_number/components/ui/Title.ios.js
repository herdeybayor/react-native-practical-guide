import { Platform, StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const Title = ({ text }) => {
    return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        color: Colors.white,
        textAlign: "center",
        padding: 12,
        maxWidth: "80%",
        width: 300,
    },
});
