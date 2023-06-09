import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
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

    const deleteGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={goalInputHandler} />
            <View style={styles.listContainer}>
                <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(itemData) => <GoalItem goal={itemData.item} onDeleteItem={deleteGoalHandler} />} />
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
