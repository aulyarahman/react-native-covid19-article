import { Box, HStack, Badge, Spacer, Flex } from "native-base";
import React from "react";
import { Pressable } from "react-native";

interface PresableComponentsProps {
  children: React.ReactNode;
}

export default function PresableComponents(props: PresableComponentsProps) {
  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }: any) => {
        return (
          <Box
            maxW="96"
            borderWidth="1"
            borderColor="coolGray.300"
            shadow="3"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            {props.children}
          </Box>
        );
      }}
    </Pressable>
  );
}
