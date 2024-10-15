import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Layout from "../../shared/components/Layouts/Layout";
import Text from "../../shared/components/Typography/Text";
import BaseButton from "../../shared/components/Form/Buttons/BaseButton";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";
import Input from "../../shared/components/Form/Inputs/Input";
import {
  postDataApi,
  updateApiHeaders,
} from "../../shared/utils/api/functions";
import { USUARIO_LOGIN_ROUTE } from "../../shared/apiRoutes";

const LoginScreen = ({ navigation }) => {
  const { height } = Dimensions.get("window");

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [hotelId, setHotelId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await postDataApi(USUARIO_LOGIN_ROUTE, {
        email,
        password,
        hotelId,
      });
      if (result.data.token) {
        updateApiHeaders(result.data.token);
        navigation.navigate("Main");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: retriveColorString() }}>
      <Layout style={{ flex: 1, backgroundColor: retriveColorString() }}>
        <Layout flex={4}>
          <MaterialIcons name="location-pin" size={120} color="white" />
          <Text category={"h1"} color={'white'}>
            Tap In
          </Text>
        </Layout>
        <Layout
          style={{
            flex: 6,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Layout
            style={{ marginTop: height * 0.05, backgroundColor: "inherit" }}
          >
            <Text category={"h2"} useThemeColor>
              Login
            </Text>
          </Layout>
          <Layout
            style={{
              backgroundColor: "inherit",
              marginTop: height * 0.05,
              gap: 5,
            }}
          >
            <Input
              label="Email"
              placeholder={"Informe o email"}
              value={email}
              onChange={setEmail}
            />
            <Input
              label="Senha"
              placeholder={"Informe a senha"}
              value={password}
              onChange={setPassword}
              isPassword
            />
            <BaseButton loading={loading} onPress={handleLogin}>
              Entrar
            </BaseButton>
          </Layout>
        </Layout>
      </Layout>
    </SafeAreaView>
  );
};

export default LoginScreen;
