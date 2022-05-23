import { useNavigation } from "@react-navigation/native";
import {
  Box,
  HStack,
  Text,
  Center,
  Heading,
  Icon,
  Image,
  Spacer,
  ScrollView,
} from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import SafeAreaLayout from "../components/SafeAreaLayout";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

interface BoxStyleProps {
  label: string;
  navigation?: string;
  imageUrl: any;
}

const imageUri = [
  require("../../assets/sertifikat_1.jpeg"),
  require("../../assets/sertifikat_2.jpeg"),
];

const BoxStyle: React.FC<BoxStyleProps> = (props: BoxStyleProps) => {
  const navigation = useNavigation();

  return (
    <Box bg="gray.100" p={4} w={"50%"} h={"150"} rounded={"xl"}>
      <TouchableOpacity
        onPress={() => navigation.navigate(`${props.navigation}` as never)}
      >
        <Image
          source={props.imageUrl}
          size={"md"}
          alt={"img"}
          rounded={"xl"}
          resizeMode={"cover"}
        />
        {/* <Icon as={FontAwesome} name="cube" color="blue.500" size={"6xl"} /> */}

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
const URI_IMAGE =
  "https://firebasestorage.googleapis.com/v0/b/androidone-81201.appspot.com/o/emil.jpg?alt=media&token=d8b32781-9ec1-4046-b4cc-54a8e3342c21";
const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaLayout px={10}>
      <ScrollView>
        <HStack my={5}>
          <Heading size={"lg"} fontWeight={"normal"}>
            Halo,
          </Heading>
          <Heading size={"lg"}> Emil Agussalim</Heading>
          <Spacer />
          <TouchableOpacity
            onPress={() => navigation.navigate(`profil-screens` as never)}
          >
            <Image
              source={{ uri: URI_IMAGE }}
              alt="img-detail"
              size={"sm"}
              rounded={"2xl"}
            />
          </TouchableOpacity>
        </HStack>
        {/*  */}

        <SliderBox
          images={imageUri}
          sliderBoxHeight={250}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          resizeMethod={"resize"}
          // autoplay
          resizeMode={"cover"}
          ImageComponentStyle={{
            borderRadius: 15,
            width: "100%",
          }}
        />
        {/*  */}
        <Heading fontSize={"xl"} mt={3}>
          Pilih kategori
        </Heading>
        <Center mt={3} px={2}>
          <HStack space={5}>
            <BoxStyle
              label="COVID-19"
              imageUrl={require(`../../assets/covid19.png`)}
              navigation="list-covid"
            />
            <BoxStyle
              label="VAKSIN"
              imageUrl={require(`../../assets/vaccine.png`)}
              navigation="list-vaksin"
            />
          </HStack>
          <HStack space={5} mt={3}>
            <BoxStyle
              label="PROKES"
              imageUrl={require(`../../assets/masker.png`)}
              navigation="list-prokes"
            />
            <BoxStyle
              label="DIAGNOSA"
              imageUrl={require(`../../assets/diagnosa.png`)}
              navigation="list-diagnosa"
            />
          </HStack>
        </Center>

        <HStack bg={"amber.100"} p={3} rounded={"xl"} m={2} space={2}>
          <Icon as={FontAwesome} name="bell-o" color="blue.500" size={"xl"} />
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Pengingat
          </Text>
        </HStack>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default HomeScreen;
