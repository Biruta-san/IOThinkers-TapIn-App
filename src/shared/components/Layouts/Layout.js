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
  flex,
  flexDirection,
  flexDir,
  paddingTop,
  pt,
  padding,
  p,
  alignItems,
  justifyContent,
  borderTopLeftRadius,
  borderTopRightRadius,
  gap,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: flex || 1,
      flexDirection: flexDirection || flexDir || "column",
      justifyContent: justifyContent || "center",
      alignItems: alignItems || "center",
      backgroundColor: bg || retriveColorString(styleType, weigth),
      height: height || "100%",
      width: width || "100%",
      borderRadius: borderRadius || 0,
      borderTopLeftRadius: borderTopLeftRadius || 0,
      borderTopRightRadius: borderTopRightRadius || 0,
      padding: padding || p || 0,
      paddingTop: paddingTop || pt || 0,
      gap: gap || 0,
    },
  });

  return <KLayout style={style ?? styles.container}>{children}</KLayout>;
};

export default Layout;
