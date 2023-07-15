import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CategoryScreen, MealDetailScreen, MealsOverviewScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CATEGORIES, MEALS } from "./data/dummy-data";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#351401",
                        },
                        headerTintColor: "#fff",
                        contentStyle: {
                            backgroundColor: "#3f2f25",
                        },
                    }}
                >
                    <Stack.Screen name="MealsCategories" component={CategoryScreen} />
                    <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                    <Stack.Screen name="MealDetails" component={MealDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
