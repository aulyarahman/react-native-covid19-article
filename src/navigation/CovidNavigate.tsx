import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreens from "../screens/CovidScreens/ListScreens";
import DetailCovidScreens from "../screens/CovidScreens/DetailCovid";

const Stack = createNativeStackNavigator();
const CovidNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="detail-covid"
        component={DetailCovidScreens}
        options={{ title: "Detail" }}
      />
    </Stack.Navigator>
  );
};

export default CovidNavigation;
