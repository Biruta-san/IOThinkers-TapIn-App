import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../shared/components/Layouts/Layout";
import Text from "../../shared/components/Typography/Text";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";

const MainScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: retriveColorString() }}>
      <Layout style={{ flex: 1, backgroundColor: retriveColorString() }}>
        <Text>Logado com sucesso</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default MainScreen;
