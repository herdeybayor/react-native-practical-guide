import { View, TextInput } from "react-native";
import React from "react";
import { PrimaryButton } from "../components";

const StartGameScreen = () => {
    return (
        <View>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
};

export default StartGameScreen;
