import { StyleSheet, View } from "react-native";
import React from "react";

import { Title } from "../components";

const GameScreen = ({ userNumber }) => {
    return (
        <View style={styles.screen}>
            <Title text="Opponent's Guess" />
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
