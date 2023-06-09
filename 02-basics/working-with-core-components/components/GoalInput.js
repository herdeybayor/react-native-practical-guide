import { View, StyleSheet, TextInput, Button, Modal, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoal, setEnteredGoal] = React.useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        if (!enteredGoal) return;
        onAddGoal(enteredGoal);
        setEnteredGoal("");
        onCancel();
    };
    return (
        <Modal visible={visible} animationType="slide">
            <StatusBar backgroundColor="#311b6b" style="light" />
            <View style={styles.inputContainer}>
                <Image source={require("../assets/images/goal.png")} style={styles.image} />
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        backgroundColor: "#311b6b",
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
    },
    button: {
        width: "40%",
    },
});
