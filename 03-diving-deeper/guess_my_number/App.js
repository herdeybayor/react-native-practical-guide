import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameScreen, StartGameScreen } from "./screens";
import { globalStyles } from "./styles";
import { Colors } from "./constants";

export default function App() {
    const [userNumber, setUserNumber] = React.useState();

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber);
    }
    return (
        <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}>
                <SafeAreaView style={globalStyles.droidSafeArea}>{userNumber ? <GameScreen userNumber={userNumber} /> : <StartGameScreen onStartGame={startGameHandler} />}</SafeAreaView>
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
