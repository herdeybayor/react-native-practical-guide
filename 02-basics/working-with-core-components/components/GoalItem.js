import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalInput = ({ goal, onDeleteItem }) => {
    return (
        <View style={styles.listItem}>
            <Pressable android_ripple={{ color: "#210644" }} onPress={onDeleteItem.bind(this, goal.id)} style={({ pressed }) => pressed && styles.pressedItem}>
                <Text style={styles.listItemText}>{goal.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    listItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    listItemText: {
        color: "#ffffff",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },
});
