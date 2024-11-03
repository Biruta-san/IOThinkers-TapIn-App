import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Text from "../../shared/components/Typography/Text";
import { generateUserReservesList } from "../../shared/utils/mocks/hotel";
import Layout from "../../shared/components/Layouts/Layout";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";
import Card from "../../shared/components/Cards/Card";
import ImageSlider from "../../shared/components/Media/ImageSlider";

const ReservesScreen = ({ navigation }) => {
  const [listAgendamentos, setListAgendamentos] = useState([]);

  useEffect(() => {
    handleSearchAgendamentos();
  }, []);

  const handleSearchAgendamentos = () => {
    setListAgendamentos(generateUserReservesList(10));
  };

  const renderItem = ({ item }) => {
    return (
      <Card>
        <View style={styles.hotelInfo}>
          <Text category={"h6"} fontWeight={"bold"} useThemeColor>
            {item.hotelNome}
          </Text>
          <Text>{item.hotelEndereco}</Text>
          <Text>Quarto: {item.hotelQuartoNumero}</Text>
          <Text>
            {new Date(item.checkIn).toLocaleDateString()} - {new Date(item.checkOut).toLocaleDateString()}
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <Layout flex={1} bg={"white"}>
      <Layout flex={1} justifyContent={"start"} bg={"white"} paddingTop={10}>
        <Text category={"h3"} useThemeColor>
          Reservas
        </Text>
        <View style={styles.listView}>
          <FlatList
            data={listAgendamentos}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  listView: {
    width: "100%",
    paddingTop: 10,
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  hotelImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  hotelInfo: {
    flex: 1,
    paddingLeft: 10,
  },
  hotelName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  hotelLocation: {
    color: "#555",
    fontSize: 14,
  },
  hotelPrice: {
    color: retriveColorString(),
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ReservesScreen;
