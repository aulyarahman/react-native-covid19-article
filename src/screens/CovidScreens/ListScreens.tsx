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
import { Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const ListData = [
  {
    title: "Apa itu COVID-19",
    path: "detail-covid-19",
  },
  {
    title: "Sejarah COVID-19",
    path: "detail-covid-19",
  },
  {
    title: "Jenis-Jenis itu COVID-19",
    path: "detail-covid-19",
  },
  {
    title: "Ciri-ciri Terkena COVID-19",
    path: "detail-covid-19",
  },
  {
    title: "Cara mecegah COVID-19",
    path: "detail-covid-19",
  },
  {
    title: "Cara mengobati COVID-19",
    path: "detail-covid-19",
  },
];

const ListCovidScreens = () => {
  const navigation = useNavigation();

  const navigateRoutes = (id: number) => {
    navigation.navigate(
      "detail-covid" as never,
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
        <Heading textAlign={"left"}>Berita Covid-19</Heading>
        {ListData.map((it, id) => (
          <TouchableOpacity
            key={id}
            style={{
              width: "100%",
              alignItems: "center",
            }}
            onPress={() => navigateRoutes(Number(id) + 1)}
          >
            <HStack mt={4} w={"100%"} space={2} rounded={"2xl"}>
              <Image
                source={{
                  uri: "https://ichef.bbci.co.uk/news/800/cpsprodpb/CA7B/production/_111253815_gettyimages-1203053913.jpg",
                }}
                size="lg"
                alt="img"
                rounded={"2xl"}
              />
              <VStack space={0}>
                <Text fontSize={"xs"} fontWeight={"bold"} color="gray.500">
                  Covid-19
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

export default ListCovidScreens;
