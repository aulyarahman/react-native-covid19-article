import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import SafeAreaLayout from "../../components/SafeAreaLayout";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ListData = [
  {
    title: "Apa itu Vaksin",
    path: "apa-itu-vaksin",
  },
  {
    title: "Manfaat Vaksin",
    path: "manfaat-vaksin",
  },
  {
    title: "Jenis-Jenis Vaksin",
    path: "jenis-jenis-vaksin",
  },
  {
    title: "Gejala Setelah Vaksin",
    path: "gejala-setelah-vaksin",
  },
];

const ListVaksinScreens = () => {
  const navigation = useNavigation();

  const navigateRoutes = (id: number) => {
    navigation.navigate(
      "detail-vaksin" as never,
      {
        id: id,
      } as never
    );
  };

  return (
    <SafeAreaLayout>
      <Text color={"gray.500"} mt={4}>
        {new Date().toLocaleString("en-us", {
          month: "short",
          year: "numeric",
        })}
      </Text>
      <Heading textAlign={"left"}>Vaksin COVID-19</Heading>
      <ScrollView>
        {ListData.map((it, id) => (
          <TouchableOpacity
            key={id}
            style={{
              width: "100%",
              alignItems: "center",
            }}
            onPress={() => navigateRoutes(Number(id) + 1)}
          >
            <HStack mt={4} w={"100%"} py={2} space={2} rounded={"2xl"}>
              <Image
                source={{
                  uri: "https://img.beritasatu.com/cache/beritasatu/910x580-2/1611475802.jpg",
                }}
                size="lg"
                alt="img"
                rounded={"2xl"}
              />
              <VStack space={0}>
                <Text fontSize={"xs"} fontWeight={"bold"} color="gray.500">
                  Vaksin
                </Text>
                <Text
                  textAlign={"center"}
                  fontWeight={"bold"}
                  fontSize={"md"}
                  py={1}
                >
                  {it.title}
                </Text>
                <Text fontSize={"xs"} color="gray.500">
                  {id * 3} menit yang lalu
                </Text>
              </VStack>
            </HStack>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ListVaksinScreens;
