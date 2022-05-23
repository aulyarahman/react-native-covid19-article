import { Box, Button, Input, Text, VStack } from "native-base";
import React from "react";
import SafeAreaLayout from "../components/SafeAreaLayout";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface InputWrapProps {
  label: string;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string;
}

const InputWrap: React.FC<InputWrapProps> = ({
  label,
  onChangeText,
  value,
}) => {
  return (
    <VStack pt={3}>
      <Text>{label}</Text>
      <Input
        onChangeText={onChangeText}
        fontSize={15}
        fontWeight={"normal"}
        borderRadius={12}
        value={value}
      />
    </VStack>
  );
};

interface ProfilDataProps {
  nama: string;
  alamat: string;
  ttl: string;
  email: string;
}

const ProfilScreens = () => {
  const [data, setData] = React.useState<ProfilDataProps>({
    alamat: "",
    nama: "",
    email: "",
    ttl: "",
  });

  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem("profile");
        if (value !== null) {
          const parse = JSON.parse(value) as ProfilDataProps;
          setData(parse);
        }
      } catch (e) {
        // error reading value
      }
    };
    getData();
  }, []);

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem("profile", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  return (
    <SafeAreaLayout>
      <Box mt={-5}>
        <InputWrap
          label="Nama"
          value={data.nama}
          onChangeText={(e) => setData((v) => ({ ...v, nama: e }))}
        />
        <InputWrap
          label="Email"
          value={data.email}
          onChangeText={(e) => setData((v) => ({ ...v, email: e }))}
        />
        <InputWrap
          label="Tempat Tanggal Lahir"
          value={data.ttl}
          onChangeText={(e) => setData((v) => ({ ...v, ttl: e }))}
        />
        <InputWrap
          label="Alamat"
          value={data.alamat}
          onChangeText={(e) => setData((v) => ({ ...v, alamat: e }))}
        />
      </Box>
      <Button onPress={storeData} rounded={"xl"} mt={5}>
        Update Profile
      </Button>
    </SafeAreaLayout>
  );
};

export default ProfilScreens;
