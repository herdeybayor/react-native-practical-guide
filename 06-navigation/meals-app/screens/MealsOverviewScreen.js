import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsOverviewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MealsOverviewScreen</Text>
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});
