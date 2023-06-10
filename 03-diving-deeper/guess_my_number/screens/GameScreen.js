import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { NumberContainer, Title } from "../components";

const GameScreen = ({ userNumber }) => {
    const generateRandomBetween = React.useCallback((min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;
        if (randomNumber === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return randomNumber;
        }
    }, []);

    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userNumber));
    return (
        <View style={styles.screen}>
            <Title text="Opponent's Guess" />
            <NumberContainer number={currentGuess} />
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
});
