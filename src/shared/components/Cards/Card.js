import { StyleSheet, View } from "react-native";

const Card = ({ children }) => {
  return <View style={styles.hotelCard}>{children}</View>;
};

const styles = StyleSheet.create({
  hotelCard: {
    flexDirection: "column",
    width: "98%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
});

export default Card;
