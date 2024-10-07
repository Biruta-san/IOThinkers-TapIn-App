import { Text as KText } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { retriveColorString } from "../../utils/enums/styleEnums";

const Text = ({
  children,
  category,
  color,
  useThemeColor = false,
  styleType,
  weigth,
  style,
}) => {
  const styles = StyleSheet.create({
    text: {
      color: useThemeColor
        ? retriveColorString(styleType, weigth)
        : color ?? "black",
    },
  });

  return (
    <KText style={style ?? styles.text} category={category}>
      {children}
    </KText>
  );
};

export default Text;
