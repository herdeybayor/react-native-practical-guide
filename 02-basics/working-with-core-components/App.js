import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.dummyText}>Another piece of text!</Text>
            <Text style={styles.dummyText}>Hello World!</Text>
            <Button title="Click me!" />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    dummyText: {
        margin: 16,
        borderWidth: 2,
        borderColor: "blue",
        padding: 16,
    },
});
