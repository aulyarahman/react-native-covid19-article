import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Routing from "./src/navigation/Main";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <Routing />
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
