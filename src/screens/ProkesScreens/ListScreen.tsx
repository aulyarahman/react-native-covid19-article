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
    title: "Apa itu Prokes",
    path: "apa-itu-vaksin",
  },
  {
    title: "Memakai Masker",
    path: "manfaat-vaksin",
  },
  {
    title: "Menajaga Jarak",
    path: "jenis-jenis-vaksin",
  },
  {
    title: "Mencuci Tangan",
    path: "gejala-setelah-vaksin",
  },
  {
    title: "Hand Sanitizer",
    path: "gejala-setelah-vaksin",
  },
];

const ListProkesScreens = () => {
  const navigation = useNavigation();

  const navigateRoutes = (id: number) => {
    navigation.navigate(
      "detail-prokes" as never,
      {
        id: id,
      } as never
    );
  };

  return (
    <SafeAreaLayout>
      <ScrollView>
        <Text color={"gray.500"}>
          {new Date().toLocaleString("en-us", {
            month: "short",
            year: "numeric",
          })}
        </Text>
        <Heading textAlign={"left"}>Prokes COVID-19</Heading>
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
                  uri: "http://stikespantirapih.ac.id/wp-content/uploads/2014/12/Protokol-Kesehatan.jpg",
                }}
                size="lg"
                alt="img"
                rounded={"2xl"}
              />
              <VStack space={0}>
                <Text fontSize={"xs"} fontWeight={"bold"} color="gray.500">
                  Protokol Kesehatan
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

export default ListProkesScreens;
