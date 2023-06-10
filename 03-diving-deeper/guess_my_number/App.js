import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";
import { globalStyles } from "./styles";
import { Colors } from "./constants";

export default function App() {
    const [userNumber, setUserNumber] = React.useState();
    const [isGameOver, setIsGameOver] = React.useState(true);

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber);
    }

    function gameOverHandler() {
        setIsGameOver(true);
    }

    function restartGameHandler() {
        setUserNumber(null);
        setIsGameOver(false);
    }
    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}>
                <SafeAreaView style={globalStyles.droidSafeArea}>
                    {isGameOver ? (
                        userNumber ? (
                            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
                        ) : (
                            <StartGameScreen onStartGame={startGameHandler} />
                        )
                    ) : (
                        <GameOverScreen onRestartGame={restartGameHandler} />
                    )}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroundImage: {
        opacity: 0.15,
    },
});
