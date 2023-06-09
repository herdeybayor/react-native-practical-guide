import React from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
    const [enteredGoal, setEnteredGoal] = React.useState("");
    const [courseGoals, setCourseGoals] = React.useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
        // setEnteredGoal("");
    };
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoal} />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.listContainer}>
                <ScrollView alwaysBounceVertical={false}>
                    {courseGoals.map((goal, i) => (
                        <View key={i} style={styles.listItem}>
                            <Text style={styles.listItemText}>{goal}</Text>
                        </View>
                    ))}
                </ScrollView>
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
    listItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    listItemText: {
        color: "#ffffff",
    },
});
