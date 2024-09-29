import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const LayoutCentered = ({ children }) => {
  return <Layout style={styles.container}>{children}</Layout>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default LayoutCentered;
