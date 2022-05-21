import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

interface SafeAreaLayoutProps {
  children: ReactNode;
}

const SafeAreaLayout: React.FC<SafeAreaLayoutProps> = (
  props: SafeAreaLayoutProps
) => {
  return (
    <SafeAreaView style={[styles.container]}>{props.children}</SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default SafeAreaLayout;
