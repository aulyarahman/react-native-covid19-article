import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

interface SafeAreaLayoutProps {
  children: ReactNode;
  px?: number;
}

const SafeAreaLayout: React.FC<SafeAreaLayoutProps> = (
  props: SafeAreaLayoutProps
) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingLeft: props.px || 20, paddingRight: props.px || 20 },
      ]}
    >
      {props.children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
export default SafeAreaLayout;
