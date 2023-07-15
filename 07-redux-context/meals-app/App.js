import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { CategoryScreen, FavoritesScreen, MealDetailScreen, MealsOverviewScreen } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesContextProvider from "./store/context/favorites-context";

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
                drawerContentStyle: {
                    backgroundColor: "#351401",
                },
                drawerActiveTintColor: "#351401",
                drawerInactiveTintColor: "#fff",
                drawerActiveBackgroundColor: "#e4baa1",
            }}
        >
            <Drawer.Screen
                name="Categories"
                component={CategoryScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />,
                }}
            />
            <Drawer.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <FavoritesContextProvider>
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
            </FavoritesContextProvider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
