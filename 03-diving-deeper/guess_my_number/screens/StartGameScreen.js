import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import React from "react";
import { Card, InstructionText, PrimaryButton, Title } from "../components";
import { Colors } from "../constants";

const StartGameScreen = ({ onStartGame }) => {
    const [enteredNumber, setEnteredNumber] = React.useState("");

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
    }

    function resetInputHandler() {
        setEnteredNumber("");
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99.", [{ text: "Okay", style: "destructive", onPress: resetInputHandler }], { cancelable: true });
            return;
        }
        onStartGame(chosenNumber);
        setEnteredNumber("");
    }
    return (
        <View style={styles.container}>
            <Title text="Guess My Number" />
            <Card>
                <InstructionText text="Enter a Number" />
                <TextInput style={styles.numberInput} keyboardType="number-pad" maxLength={2} value={enteredNumber} onChangeText={numberInputHandler} />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
    },
    numberInput: {
        height: 50,
        width: 50,
        fontFamily: "open-sans-bold",
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        textAlign: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
});
