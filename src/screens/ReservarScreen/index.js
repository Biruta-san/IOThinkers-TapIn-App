import { SafeAreaView } from "react-native-safe-area-context";
import Text from "../../shared/components/Typography/Text";
import { useEffect } from "react";
import { getDataByIdApi } from "../../shared/utils/api/functions";
import { HOTEL_ROUTE } from "../../shared/apiRoutes";

const ReservarScreen = ({ route }) => {
  const hotelId = route.params.hotelId;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataByIdApi(HOTEL_ROUTE, hotelId);
    };
    fetchData();
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* IMAGEM */}
      <Text category={"h2"} useThemeColor>
        Nome do Hotel
      </Text>
    </SafeAreaView>
  );
};

export default ReservarScreen;
