import {
  Box,
  Heading,
  HStack,
  Text,
  Icon,
  Divider,
  ScrollView,
  Pressable,
  Button,
} from "native-base";
import React from "react";
import SafeAreaLayout from "../../components/SafeAreaLayout";
import { FontAwesome } from "@expo/vector-icons";
import { Alert, TouchableOpacity } from "react-native";
import mocks from "./mocks.json";
import SpinnerLoading from "../../components/Loading";
import { useStore } from "../../store";
import { useNavigation } from "@react-navigation/native";

export interface DiagnosaQuestionProps {
  id: number;
  question?: string;
  answer: boolean | null;
}

const DiagnosaScreens = () => {
  const navigation = useNavigation();

  const [data, setData] = React.useState<DiagnosaQuestionProps[]>([]);
  const setTodo = useStore((v) => v.addTodo);
  const removeTodo = useStore((v) => v.removeTodo);
  const numbs = useStore((v) => v.todos);

  React.useEffect(() => {
    setData(mocks);
  }, []);

  const OnAnswer = ({ answer, id }: DiagnosaQuestionProps) => {
    const index = data.findIndex((x) => x["id"] === id);
    data[index]["answer"] = answer;
    if (answer) {
      setTodo(id);
    }
    if (!answer) {
      removeTodo(id);
    }
  };

  const DiagnosaProses = () => {
    const covid = [
      1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
    const PNEUMONIA = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 16, 19, 20];
    const ISPA = [1, 2, 3, 7, 8, 9, 10];

    const covids = covid.every((element) => {
      return numbs.includes(element);
    });
    if (covids) {
      navigation.navigate(
        "detail-diagnosa" as never,
        {
          type: "COVID-19",
        } as never
      );
      return;
    }

    const PNEUMONIAS = PNEUMONIA.every((element) => {
      return numbs.includes(element);
    });
    if (PNEUMONIAS) {
      navigation.navigate(
        "detail-diagnosa" as never,
        {
          type: "PNEUMONIA",
        } as never
      );
      return;
    }

    const ISPAS = ISPA.every((element) => {
      return numbs.includes(element);
    });
    if (ISPAS) {
      navigation.navigate(
        "detail-diagnosa" as never,
        {
          type: "ISPA",
        } as never
      );
      return;
    } else {
      navigation.navigate(
        "detail-diagnosa" as never,
        {
          type: "ELSE",
        } as never
      );
      return;
    }
  };

  if (data.length < 1) {
    return (
      <SafeAreaLayout>
        <SpinnerLoading />
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
              <TouchableOpacity
                style={{ width: 150 }}
                onPress={() => {
                  OnAnswer({
                    answer: !it.answer,
                    id: it.id,
                    question: it.question,
                  });
                }}
              >
                <HStack
                  rounded={"xl"}
                  space={2}
                  borderWidth={1}
                  borderColor={"gray.400"}
                  bgColor={numbs.includes(it.id) ? "gray.500" : "white"}
                  p={2}
                >
                  <Icon
                    as={FontAwesome}
                    name="check"
                    color="green.500"
                    size={"md"}
                  />
                  <Text
                    fontWeight={"bold"}
                    fontSize={16}
                    color={numbs.includes(it.id) ? "white" : "black"}
                  >
                    YA
                  </Text>
                </HStack>
              </TouchableOpacity>
              {/*  */}
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
        <Button rounded={"xl"} my={5} onPress={DiagnosaProses}>
          <Text fontWeight={"semibold"} color="white" fontSize={20}>
            Diagnosa
          </Text>
        </Button>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default DiagnosaScreens;
