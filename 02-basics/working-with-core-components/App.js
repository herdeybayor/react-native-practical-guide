import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [enteredGoal, setEnteredGoal] = React.useState("");
    const [courseGoals, setCourseGoals] = React.useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
        setEnteredGoal("");
    };
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.listContainer}>
                {courseGoals.map((goal) => (
                    <View key={goal} style={{ padding: 8, marginVertical: 8, backgroundColor: "#cccccc", borderRadius: 8 }}>
                        <Text>{goal}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
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
    listContainer: {
        flex: 5,
    },
});
