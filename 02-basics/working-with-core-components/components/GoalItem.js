import { View, Text, StyleSheet } from "react-native";

const GoalInput = ({ text }) => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listItemText}>{text}</Text>
        </View>
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
