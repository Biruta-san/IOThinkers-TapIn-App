import { Layout as KLayout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { retriveColorString } from "../../utils/enums/styleEnums";

const Layout = ({ children, width, height, styleType, weigth, bg }) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bg || retriveColorString(styleType, weigth),
      height: height || "100%",
      width: width || "100%"
    },
  });

  return <KLayout style={[styles.container]}>{children}</KLayout>;
};

export default Layout;
