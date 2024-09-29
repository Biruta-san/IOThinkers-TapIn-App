import LayoutCentered from "../../components/Layouts/LayoutCentered";
import Layout from "../../components/Layouts/Layout";
import Text from "../../components/Typography/Text";

const LoginScreen = () => {
  return (
    <LayoutCentered>
      <Layout height={'90%'} width={'70%'} bg='transparent'>
        <Text category={'h1'}>Login Screen</Text>
      </Layout>
    </LayoutCentered>
  );
};

export default LoginScreen;
