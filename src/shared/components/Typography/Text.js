import { StyleSheet, Text as RText } from "react-native";
import { retriveColorString } from "../../utils/enums/styleEnums";

const Text = ({
  children,
  category,
  color,
  useThemeColor = false,
  styleType,
  weigth,
  style,
  fontSize,
  fontWeight,
}) => {
  const getSize = () => {
    switch (category) {
      case "h1":
        return 34;
      case "h2":
        return 32;
      case "h3":
        return 30;
      case "h4":
        return 28;
      case "h5":
        return 24;
      case "h6":
        return 20;
      default:
        return 16;
    }
  };
  const getWeight = () => {
    switch (category) {
      case "h1":
      case "h2":
      case "h3":
        return "bold";
      case "h4":
      case "h5":
      case "h6":
        return "normal";
      default:
        return "normal";
    }
  };

  const styles = StyleSheet.create({
    text: {
      color: useThemeColor
        ? retriveColorString(styleType, weigth)
        : color ?? "#202020",
      fontSize: fontSize ?? getSize(),
      fontWeight: fontWeight ?? getWeight(),
    },
  });

  return <RText style={style ?? styles.text}>{children}</RText>;
};

export default Text;
