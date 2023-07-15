import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CategoryScreen, FavoritesScreen, MealDetailScreen, MealsOverviewScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#351401",
                },
                headerTintColor: "#fff",
                sceneContainerStyle: {
                    backgroundColor: "#3f2f25",
                },
            }}
        >
            <Drawer.Screen name="Categories" component={CategoryScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
}

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
                        animation: "slide_from_right",
                    }}
                >
                    <Stack.Screen
                        name="DrawerScreen"
                        component={DrawerNav}
                        options={{
                            headerShown: false,
                        }}
                    />
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
