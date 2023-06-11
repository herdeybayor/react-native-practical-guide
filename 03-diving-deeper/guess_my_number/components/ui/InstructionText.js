import { StyleSheet, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants";

const InstructionText = ({ text, style }) => {
    return <Text style={[styles.instructionText, style]}>{text}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
});
