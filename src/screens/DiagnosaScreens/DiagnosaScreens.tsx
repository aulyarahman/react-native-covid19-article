import {
  Box,
  Heading,
  HStack,
  Text,
  Icon,
  Divider,
  ScrollView,
} from "native-base";
import React from "react";
import SafeAreaLayout from "../../components/SafeAreaLayout";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import mocks from "./mocks.json";

export interface DiagnosaQuestionProps {
  id: number;
  question: string;
  answer: string;
}

const DiagnosaScreens = () => {
  const [data, setData] = React.useState<DiagnosaQuestionProps[]>([]);

  React.useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setData(mocks);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  const OnAnswer = (id: number, key: string, answer: string) => {
    const find = data.find((e) => e.id === id);

    setData((v) => ({ ...v, answer: answer }));
  };

  if (!data) {
    return (
      <SafeAreaLayout>
        <Text>Loading...</Text>
      </SafeAreaLayout>
    );
  }

  return (
    <SafeAreaLayout>
      <ScrollView>
        {data.map((it, id) => (
          <Box mt={5} key={id} mb={2}>
            <HStack space={2} my={3}>
              <Box rounded={"full"} size={7} bgColor={"blue.300"}>
                <Text textAlign={"center"} pt={1}>
                  {id + 1}
                </Text>
              </Box>
              <Text color={"gray.500"} fontSize={"sm"} pt={1}>
                Pertanyaan Diagnosa
              </Text>
            </HStack>
            <Heading size={"lg"}>{it.question}</Heading>
            <HStack space={3} my={3}>
              <TouchableOpacity style={{ width: 150 }}>
                <HStack
                  rounded={"xl"}
                  space={2}
                  borderWidth={1}
                  borderColor={"gray.400"}
                  bgColor={"red.400"}
                  p={2}
                >
                  <Icon
                    as={FontAwesome}
                    name="check"
                    color="green.500"
                    size={"md"}
                  />
                  <Text fontWeight={"bold"} fontSize={16}>
                    YA
                  </Text>
                </HStack>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: 150 }}>
                <HStack
                  rounded={"xl"}
                  space={2}
                  borderWidth={1}
                  borderColor={"gray.400"}
                  p={2}
                >
                  <Icon
                    as={FontAwesome}
                    name="close"
                    color="red.500"
                    size={"md"}
                  />
                  <Text fontWeight={"bold"} color={"gray.500"} fontSize={16}>
                    TIDAK
                  </Text>
                </HStack>
              </TouchableOpacity>
            </HStack>
            <Divider />
          </Box>
        ))}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default DiagnosaScreens;
