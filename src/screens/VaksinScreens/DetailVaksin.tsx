import { useRoute } from "@react-navigation/native";
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import SafeAreaLayout from "../../components/SafeAreaLayout";
import { FontAwesome } from "@expo/vector-icons";
import mocks from "./mocks.json";
import { TouchableOpacity } from "react-native";
import SpinnerLoading from "../../components/Loading";

export interface VaksinDataTypes {
  id: number;
  title: string;
  description: string[];
  option: Option[];
  text_afer: string;
  source: string;
  list_text_afer: string[];
}

export interface Option {
  label: string;
  value: string[];
}

export interface RouteProps {
  id: number;
}

const URI_IMAGE =
  "https://res.cloudinary.com/dk0z4ums3/image/upload/v1615869561/attached_image/vaksin-sinovac-0-alodokter.jpg";

const DetailVaksinScreens = () => {
  const [data, setData] = React.useState<VaksinDataTypes | undefined>();
  const [like, setLike] = React.useState(0);
  const route = useRoute();
  const params = route.params as RouteProps;

  React.useEffect(() => {
    Promise.all([mocks.find((e) => e.id === params.id)]).then((it) => {
      setData(it[0]);
    });
  }, []);

  if (!data) {
    return (
      <SafeAreaLayout>
        <SpinnerLoading />
      </SafeAreaLayout>
    );
  }

  return (
    <SafeAreaLayout>
      <ScrollView>
        <Heading mt={4}>Fitur Aplikasi</Heading>
        {/* Image */}
        <Image
          source={{ uri: URI_IMAGE }}
          alt="img-detail"
          width={"100%"}
          height={200}
          rounded={"2xl"}
          mt={5}
        />
        <HStack mt={2}>
          <HStack
            rounded={"full"}
            borderWidth={1}
            borderColor={"gray.400"}
            p={2}
          >
            <Icon
              as={FontAwesome}
              name="dot-circle-o"
              color="amber.500"
              size={"md"}
            />
            <Text>Design Thinking</Text>
          </HStack>
          <Spacer />
          <HStack mt={"1"} pr={3}>
            <Icon as={FontAwesome} name="eye" color="red" size={"md"} />
            <Text pl={1} fontSize={"md"} fontWeight={"bold"}>
              3.5K
            </Text>
          </HStack>
          <TouchableOpacity
            onPress={() => setLike((v) => v + 1)}
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginTop: 4,
            }}
          >
            <Icon as={FontAwesome} name="heart" color="red" size={"md"} />
            <Text pl={1} fontSize={"md"} fontWeight={"bold"}>
              {like}
            </Text>
          </TouchableOpacity>
        </HStack>
        {/* Header */}
        <Box pt={5}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {data.title}
          </Text>
        </Box>
        {/* Header End */}

        {/* Source */}
        <HStack space={1} mb={5}>
          <Text fontSize={"sm"} color={"gray.500"}>
            Artikel ini diambil dari -
          </Text>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {data.source}
          </Text>
        </HStack>

        {/* Description */}
        <Box>
          {data.description.map((val, id) => {
            return (
              <Text
                key={id}
                textAlign={"justify"}
                fontSize={"md"}
                fontWeight={"semibold"}
                color={"gray.600"}
              >
                {val}
              </Text>
            );
          })}

          <Box mt={3}>
            {data.option.map((valx, idx) => {
              return (
                <VStack key={idx}>
                  <Text
                    fontWeight={"bold"}
                    fontSize={"md"}
                    textAlign={"justify"}
                  >
                    {idx + 1}. {valx.label}
                  </Text>
                  {valx.value ? (
                    <Text color={"gray.700"} fontSize={"md"} pl={4}>
                      {valx.value}
                    </Text>
                  ) : null}
                </VStack>
              );
            })}
          </Box>

          <Text my={2} fontSize={"md"}>
            {data.text_afer}
          </Text>

          {/*  */}

          {data.list_text_afer.map((valx, id) => (
            <VStack py={1} key={id}>
              <Text
                key={id}
                textAlign={"justify"}
                fontSize={"md"}
                fontWeight={"semibold"}
                color={"gray.600"}
              >
                {id + 1}.{valx}
              </Text>
            </VStack>
          ))}
        </Box>
      </ScrollView>
    </SafeAreaLayout>
  );
};
export default DetailVaksinScreens;
