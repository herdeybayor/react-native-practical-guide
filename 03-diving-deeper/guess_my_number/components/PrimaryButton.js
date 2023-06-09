import { View, Text } from "react-native";
import React from "react";

const PrimaryButton = ({ children }) => {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    );
};

export default PrimaryButton;
