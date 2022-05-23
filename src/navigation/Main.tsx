import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ListScreens from "../screens/CovidScreens/ListScreens";
import DetailCovidScreens from "../screens/CovidScreens/DetailCovid";
import DetailVaksinScreens from "../screens/VaksinScreens/DetailVaksin";
import ListVaksinScreens from "../screens/VaksinScreens/ListScreens";

import DetailProkesScreens from "../screens/ProkesScreens/DetailProkes";
import ListProkesScreens from "../screens/ProkesScreens/ListScreen";

import DiagnosaScreens from "../screens/DiagnosaScreens/DiagnosaScreens";
import DetailDiagnosaScreen from "../screens/DiagnosaScreens/DetailDiagnosaScreen";
import ProfilScreens from "../screens/ProfilScreens";

const Stack = createNativeStackNavigator();
const Routing = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="list-covid"
        component={ListScreens}
        options={{ title: "COVID-19" }}
      />
      <Stack.Screen
        name="list-vaksin"
        component={ListVaksinScreens}
        options={{ title: "VAKSIN" }}
      />
      <Stack.Screen
        name="list-prokes"
        component={ListProkesScreens}
        options={{ title: "PROKES" }}
      />
      <Stack.Screen
        name="profil-screens"
        component={ProfilScreens}
        options={{ title: "Profil" }}
      />

      <Stack.Screen
        name="list-diagnosa"
        component={DiagnosaScreens}
        options={{ headerShown: false }}
      />
      {/*  */}
      <Stack.Screen
        name="detail-covid"
        component={DetailCovidScreens}
        options={{ title: "Detail", headerShown: false }}
      />
      <Stack.Screen
        name="detail-vaksin"
        component={DetailVaksinScreens}
        options={{ title: "Detail", headerShown: false }}
      />
      <Stack.Screen
        name="detail-prokes"
        component={DetailProkesScreens}
        options={{ title: "Detail", headerShown: false }}
      />
      <Stack.Screen
        name="detail-diagnosa"
        component={DetailDiagnosaScreen}
        options={{ title: "Detail", headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Routing;
