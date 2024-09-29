import { Text as KText } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const Text = ({ children, style, category }) => {
  const styles = StyleSheet.create({
    text: {
      color: "black",
    },
  });

  return <KText style={style || styles} category={category}>{children}</KText>;
};

export default Text;