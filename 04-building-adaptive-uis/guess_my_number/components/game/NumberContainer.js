import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const NumberContainer = ({ number }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{number}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontFamily: "open-sans-bold",
        color: Colors.accent500,
        fontSize: 36,
    },
});
