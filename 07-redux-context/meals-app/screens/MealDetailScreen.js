import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useContext } from "react";

import { MEALS } from "../data/dummy-data";
import { IconButton, List, MealDetails, Subtitle } from "../components";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ navigation, route }) {
    const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext);

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    const isFavorite = React.useMemo(() => ids.includes(mealId), [ids, mealId]);

    function headerButtonPressHandler() {
        if (isFavorite) {
            removeFavorite(mealId);
        } else {
            addFavorite(mealId);
        }
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: MEALS.find((meal) => meal.id === route.params.mealId).title,
            headerRight: () => <IconButton icon={isFavorite ? "star" : "star-outline"} color="white" onPress={headerButtonPressHandler} />,
        });
    }, [navigation, route, isFavorite]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: "100%",
        height: 350,
    },
    title: {
        fontWeight: "bold",
        fontSize: 24,
        margin: 8,
        textAlign: "center",
        color: "white",
    },
    detailText: {
        color: "white",
    },
    listOuterContainer: {
        alignItems: "center",
    },
    listContainer: {
        width: "80%",
    },
});
