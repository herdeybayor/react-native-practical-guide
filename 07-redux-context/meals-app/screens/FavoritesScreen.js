import { StyleSheet, View, Text } from "react-native";
import React, { useContext } from "react";
import { MealsList } from "../components";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = () => {
    const { ids } = useContext(FavoritesContext);
    const meals = MEALS.filter((meal) => ids.includes(meal.id));

    if (meals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite meals yet.</Text>
            </View>
        );
    }
    return <MealsList items={meals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});
