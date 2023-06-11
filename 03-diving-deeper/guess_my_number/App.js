import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { GameOverScreen, GameScreen, StartGameScreen } from "./screens";
import { globalStyles } from "./styles";
import { Colors } from "./constants";

// Prevent native splash screen from autohiding before App component declaration
SplashScreen.preventAutoHideAsync();

export default function App() {
    const [userNumber, setUserNumber] = React.useState();
    const [isGameOver, setIsGameOver] = React.useState(true);

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    const onLayoutRootView = React.useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber);
        setIsGameOver(false);
    }

    function gameOverHandler() {
        setIsGameOver(true);
    }

    function restartGameHandler() {
        setUserNumber(null);
    }
    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen} onLayout={onLayoutRootView}>
            <ImageBackground source={require("./assets/images/background.png")} style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}>
                <SafeAreaView style={globalStyles.droidSafeArea}>
                    {userNumber ? (
                        isGameOver ? (
                            <GameOverScreen onRestartGame={restartGameHandler} />
                        ) : (
                            <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
                        )
                    ) : (
                        <StartGameScreen onStartGame={startGameHandler} />
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
