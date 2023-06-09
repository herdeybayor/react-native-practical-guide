import React from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { GoalInput, GoalItem } from "./components";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [modalVisible, setModalVisible] = React.useState(false);
    const [courseGoals, setCourseGoals] = React.useState([]);

    const startAddGoalHandler = () => {
        setModalVisible(true);
    };

    const endAddGoalHandler = () => {
        setModalVisible(false);
    };

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
            <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler} />
            <GoalInput onAddGoal={goalInputHandler} visible={modalVisible} onCancel={endAddGoalHandler} />
            <View style={styles.listContainer}>
                <FlatList data={courseGoals} keyExtractor={(item) => item.id} renderItem={(itemData) => <GoalItem goal={itemData.item} onDeleteItem={deleteGoalHandler} />} />
            </View>
            <StatusBar backgroundColor="#1e085a" />
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
