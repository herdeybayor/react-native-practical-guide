import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
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
                    <Stack.Screen
                        name="MealsCategories"
                        component={CategoryScreen}
                        options={{
                            title: "All Categories",
                        }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverviewScreen}
                        options={({ route }) => ({
                            title: CATEGORIES.find((category) => category.id === route.params.categoryId).title,
                        })}
                    />
                    <Stack.Screen name="MealDetails" component={MealDetailScreen} options={({ route }) => ({ title: MEALS.find((meal) => meal.id === route.params.mealId).title })} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
