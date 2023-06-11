import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

const GameOverScreen = ({ onRestartGame }) => {
    return (
        <View style={styles.screen}>
            <Title text="GAME OVER" />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>0</Text> rounds to guess the number <Text style={styles.highlight}>0</Text>
            </Text>
            <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: 300,
        aspectRatio: 1,
        borderRadius: "50%",
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    summaryText: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: "open-sans-bold",
    },
});
