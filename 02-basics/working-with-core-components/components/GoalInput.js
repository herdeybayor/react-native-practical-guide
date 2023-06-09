import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
import React from "react";

const GoalInput = ({ onAddGoal, visible, setVisible }) => {
    const [enteredGoal, setEnteredGoal] = React.useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        if (!enteredGoal) return;
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    };
    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        flex: 1,
        marginRight: 16,
        padding: 8,
    },
});
