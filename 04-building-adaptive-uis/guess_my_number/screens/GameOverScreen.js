import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
    return (
        <View style={styles.screen}>
            <Title text="GAME OVER" />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
        </View>
    );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        width: deviceWidth < 380 ? 150 : 300,
        aspectRatio: 1,
        borderRadius: (deviceWidth < 380 ? 150 : 300) / 2,
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
