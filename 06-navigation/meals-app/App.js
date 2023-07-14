import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CategoryScreen } from "./screens";

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <CategoryScreen />
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
