import * as React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Import Pages
import FirstPage from "./src/pages/FirstPage";
import SecondPage from "./src/pages/SecondPage";
import ThirdPage from "./src/pages/ThirdPage";
// Import Custom SideBar
import CustomSidebarMenu from "./src/components/CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackIconHeaderLeft = (props) => {
  // Props to open/close the drawer menu
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/* Sanduiche button image */}
        <Image
          // source={require("./assets/icon_drawer_menu_white-or.png")}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function firstScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="FirstPage">
      <Stack.Screen
        name="FirstPage"
        component={FirstPage}
        options={{
          title: "Primeira tela", // Header title
          headerLeft: () => (
            <StackIconHeaderLeft navigationProps={navigation} />
          ),
          headerStyle: { backgroundColor: "#E37D00" }, // Header color
          headerTintColor: "#FFFFFF", // Header text color
          headerTitleStyle: { fontWeight: "bold" }, // Header text style
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => <StackIconHeaderLeft navigationProps={navigation} />,
        headerStyle: { backgroundColor: "#E37D00" }, // Header color
        heaaderTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" }, // Header text style
      }}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{ title: "Segunda tela" }} // Header title
      />
      <Stack.Screen
        name="ThirdPage"
        component={ThirdPage}
        options={{ title: "Terceira tela" }} // Header title
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FEF3B4" }}>
      <StatusBar style="light" backgroundColor="#AD6200" />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContentOptions={{
            activeTintColor: "#730000",
            inactiveTintColor: "#730000",
            itemStyle: { marginVertical: 5 },
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
          <Drawer.Screen
            name="FirstPage"
            options={{ drawerLabel: "Primeira tela" }}
            component={firstScreenStack}
          />
          <Drawer.Screen
            name="SecondPage"
            options={{ drawerLabel: "Segunda tela" }}
            component={secondScreenStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
