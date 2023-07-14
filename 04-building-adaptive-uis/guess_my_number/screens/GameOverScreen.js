import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

const GameOverScreen = ({ roundsNumber, userNumber, onRestartGame }) => {
    const { width, height } = useWindowDimensions();

    const imageSize = React.useMemo(() => {
        if (width < 380) {
            return 150;
        }

        if (height < 400) {
            return 80;
        }
        return 300;
    }, [width, height]);
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title text="GAME OVER" />
                <View
                    style={[
                        styles.imageContainer,
                        {
                            width: imageSize,
                            height: imageSize,
                            borderRadius: imageSize / 2,
                        },
                    ]}
                >
                    <Image style={styles.image} source={require("../assets/images/success.png")} />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
                </Text>
                <PrimaryButton onPress={onRestartGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
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
