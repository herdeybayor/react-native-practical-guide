import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalInput = ({ goal, onDeleteItem }) => {
    return (
        <Pressable onPress={() => onDeleteItem(goal.id)}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{goal.text}</Text>
            </View>
        </Pressable>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
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
