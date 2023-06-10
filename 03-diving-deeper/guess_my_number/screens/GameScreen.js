import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = ({ userNumber }) => {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess {userNumber}</Text>
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
