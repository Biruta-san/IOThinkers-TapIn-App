import { Layout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const LayoutCentered = ({
  children
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
  });

  return <Layout style={styles.container}>{children}</Layout>;
};

export default LayoutCentered;
