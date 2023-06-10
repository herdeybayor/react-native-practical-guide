import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { GameScreen, StartGameScreen } from "./screens";
import React from "react";

export default function App() {
    const [userNumber, setUserNumber] = React.useState();

    function startGameHandler(selectedNumber) {
        setUserNumber(selectedNumber);
    }
    return (
        <LinearGradient colors={["#3b021f", "#ddb52f"]} style={styles.rootScreen}>
            <ImageBackground source={require("./assets/images/background.png")} style={styles.rootScreen} resizeMode="cover" imageStyle={styles.backgroundImage}>
                {userNumber ? <GameScreen userNumber={userNumber} /> : <StartGameScreen onStartGame={startGameHandler} />}
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
