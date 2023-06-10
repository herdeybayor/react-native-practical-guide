import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryButton } from "../components";

const GameOverScreen = ({ onRestartGame }) => {
    return (
        <View>
            <Text>GameOverScreen</Text>
            <PrimaryButton onPress={onRestartGame}>Restart Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({});
