import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components";

const MealsOverviewScreen = ({ route }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={({ item }) => <MealItem {...item} />} />
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
