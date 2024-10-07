import { Layout as KLayout } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { retriveColorString } from "../../utils/enums/styleEnums";

const Layout = ({
  children,
  width,
  height,
  styleType,
  weigth,
  bg,
  borderRadius,
  style,
  flex
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: flex || 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bg || retriveColorString(styleType, weigth),
      height: height || "100%",
      width: width || "100%",
      borderRadius: borderRadius || 0,
    },
  });

  return <KLayout style={style ?? styles.container}>{children}</KLayout>;
};

export default Layout;
