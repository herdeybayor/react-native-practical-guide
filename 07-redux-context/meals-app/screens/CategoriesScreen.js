import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";
import React from "react";

function CategoriesScreen({ navigation }) {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: "All Categories",
        });
    }, [navigation]);
    const pressHandler = (categoryId) => {
        navigation.navigate("MealsOverview", { categoryId });
    };
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={({ item }) => <CategoryGridTile item={item} onPress={pressHandler.bind(this, item.id)} />} numColumns={2} />;
}

export default CategoriesScreen;
