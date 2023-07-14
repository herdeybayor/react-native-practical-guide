import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

function CategoriesScreen() {
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={({ item }) => <CategoryGridTile item={item} />} numColumns={2} />;
}

export default CategoriesScreen;
