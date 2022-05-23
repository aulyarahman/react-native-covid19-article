import { useRoute } from "@react-navigation/native";
import { Box, Heading, HStack, Image, ScrollView, Text } from "native-base";
import React from "react";
import SpinnerLoading from "../../components/Loading";
import SafeAreaLayout from "../../components/SafeAreaLayout";
import mocks from "./mocks_hasil.json";

export interface RouteProps {
  type: string;
}

export interface DiagnosaTypes {
  id: string;
  description: string[];
  imageUrl: string;
  option: string[];
  text_afer: string[];
  source: string;
}

const DetailDiagnosaScreen = () => {
  const route = useRoute();
  const params = route.params as RouteProps;
  const [data, setData] = React.useState<DiagnosaTypes | undefined>();

  React.useEffect(() => {
    Promise.all([mocks.find((e) => e.id === params.type)]).then((it) => {
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
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Hasil Diagnosa
      </Text>

      <ScrollView>
        <Image
          source={{
            uri: data.imageUrl,
          }}
          alt="img-detail"
          width={"100%"}
          height={200}
          rounded={"2xl"}
          my={3}
        />
        <Heading>
          {params.type === "ELSE" ? "Tidak Memiliki Gejala" : params.type}
        </Heading>
        {data.description.map((it, key) => (
          <Text fontSize={18} pt={2} key={key}>
            {it}
          </Text>
        ))}

        <Box pt={2}>
          {data.option.map((it, key) => (
            <Text fontWeight={"semibold"} key={key} fontSize={17}>
              {key + 1}. {it}
            </Text>
          ))}
        </Box>

        {data.text_afer.map((it, key) => (
          <Text fontSize={18} pt={2} key={key}>
            {it}
          </Text>
        ))}

        <Text fontWeight={"bold"} fontSize={16}>
          {data.source}
        </Text>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default DetailDiagnosaScreen;
