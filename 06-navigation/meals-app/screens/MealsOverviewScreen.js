import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components";

const MealsOverviewScreen = ({ navigation, route }) => {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((category) => category.id === route.params.categoryId).title,
        });
    }, [navigation, route]);

    const handlePress = (id) => {
        navigation.navigate("MealDetails", { mealId: id });
    };

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={({ item }) => <MealItem onPress={handlePress.bind(this, item.id)} {...item} />} />
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
