import React from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import { GoalInput, GoalItem } from "./components";

export default function App() {
    const [courseGoals, setCourseGoals] = React.useState([]);

    const goalInputHandler = (enteredGoal) => {
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            {
                id: Math.random().toString(),
                text: enteredGoal,
            },
        ]);
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={goalInputHandler} />
            <View style={styles.listContainer}>
                <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(itemData) => <GoalItem text={itemData.item.text} />} />
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
    listContainer: {
        flex: 5,
    },
});
