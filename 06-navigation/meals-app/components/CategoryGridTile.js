import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ item }) => {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.button__pressed : null]} android_ripple={{ color: "#ccc" }}>
                <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.select({ android: "hidden", ios: "visible" }),
    },
    button: {
        flex: 1,
    },
    button__pressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
});
