import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";

import { NumberContainer, PrimaryButton, Title } from "../components";

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

    const nextGuessHandler = React.useCallback(
        (direction) => {
            if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
                Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
                return;
            }
            if (direction === "lower") {
                const newMax = currentGuess - 1;
                setCurrentGuess(generateRandomBetween(1, newMax, currentGuess));
            } else {
                const newMin = currentGuess + 1;
                setCurrentGuess(generateRandomBetween(newMin, 100, currentGuess));
            }
        },
        [currentGuess, userNumber]
    );

    return (
        <View style={styles.screen}>
            <Title text="Opponent's Guess" />
            <NumberContainer number={currentGuess} />
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                </View>
            </View>
            {/* <View>LOG ROUNDS</View> */}
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
