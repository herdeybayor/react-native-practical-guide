import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components";

function CategoriesScreen({ navigation }) {
    const pressHandler = () => {
        navigation.navigate("MealsOverview");
    };
    return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={({ item }) => <CategoryGridTile item={item} onPress={pressHandler} />} numColumns={2} />;
}

export default CategoriesScreen;
