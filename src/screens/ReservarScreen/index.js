import Text from "../../shared/components/Typography/Text";
import { useEffect, useState } from "react";
import { getDataByIdApi } from "../../shared/utils/api/functions";
import { HOTEL_ROUTE } from "../../shared/apiRoutes";
import ImageSlider from "../../shared/components/Media/ImageSlider";
import { View, StyleSheet } from "react-native";

const ReservarScreen = ({ route }) => {
  const hotelId = route?.params?.hotelId;
  const item = route?.params?.item;
  const [dadosHotel, setDadosHotel] = useState(null);

  const fotos = [
    `https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/40/e5/50/20190118-193234-largejpg.jpg`,
    `https://www.civitatis.com/blog/wp-content/uploads/2022/11/downtown-orlando-florida.jpg`,
  ];

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataByIdApi(HOTEL_ROUTE, hotelId);
      setDadosHotel(result.data);
    };
    fetchData();
  }, [hotelId]);

  return (
    <>
      <ImageSlider images={fotos} imageBorderRadius={0} />
      <View style={styles.detailsContainer}>
        <Text category={"h1"} style={styles.hotelName}>
          {item?.nome}
        </Text>
        <Text category={"s1"} style={styles.hotelLocation}>
          {item?.cidade}, {item?.endereco}
        </Text>
        <Text category={"h6"} useThemeColor fontWeight={"bold"}>
          Diária: R$ {item?.valorDiaria}
        </Text>
      </View>
    </>
  );
};

export default ReservarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  hotelName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  hotelLocation: {
    fontSize: 16,
    color: "#202020",
    marginBottom: 10,
  },
});
