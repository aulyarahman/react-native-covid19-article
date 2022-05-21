import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Text, Center, Heading, Icon } from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import SafeAreaLayout from "../components/SafeAreaLayout";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

interface BoxStyleProps {
  label: string;
  navigation?: string;
}

const BoxStyle: React.FC<BoxStyleProps> = (props: BoxStyleProps) => {
  const navigation = useNavigation();

  return (
    <Box bg="gray.100" p={4} w={"40"} h={"150"} rounded={"xl"}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${props.navigation}` as never)}
      >
        <Icon
          as={FontAwesome}
          name="dot-circle-o"
          color="amber.500"
          size={"6xl"}
        />
        <Text textAlign={"left"} fontWeight="bold" fontSize={"md"} mt={2}>
          {props.label}
        </Text>
        <Text
          textAlign={"left"}
          fontWeight="semibold"
          textTransform={"capitalize"}
          color={"gray.400"}
          fontSize={"xs"}
        >
          Detail artikel {props.label}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

const HomeScreen = () => {
  return (
    <SafeAreaLayout>
      <HStack my={5}>
        <Heading size={"lg"} fontWeight={"normal"}>
          Halo,
        </Heading>
        <Heading size={"lg"}> Emil Agussalim</Heading>
      </HStack>
      {/*  */}
      <Center rounded={"xl"} bg="gray.200" h={"40"}>
        <Heading textTransform={"capitalize"}>
          Sertifikat vaksin dosis 1
        </Heading>
      </Center>
      {/*  */}
      <Heading fontSize={"xl"} mt={3}>
        Pilih kategori
      </Heading>
      <Center mt={3}>
        <HStack space={5}>
          <BoxStyle label="COVID-19" navigation="list-covid" />
          <BoxStyle label="VAKSIN" navigation="list-vaksin" />
        </HStack>
        <HStack space={5} mt={3}>
          <BoxStyle label="PROKES" navigation="list-prokes" />
          <BoxStyle label="DIAGNOSA" />
        </HStack>
      </Center>
    </SafeAreaLayout>
  );
};

export default HomeScreen;
