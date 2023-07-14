import { View, Text, Pressable } from "react-native";
import React from "react";

const CategoryGridTile = ({ item }) => {
    return (
        <View>
            <Pressable onPress={() => console.log("Pressed")}>
                <View>
                    <Text>{item.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;
