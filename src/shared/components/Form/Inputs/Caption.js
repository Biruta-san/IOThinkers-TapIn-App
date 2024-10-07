import { Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

const Caption = (helperText) => {
  const styles = StyleSheet.create({
    text: {
      color: "black",
      fontSize: 12,
      opacity: 0.8
    }
  });

  return <Text style={styles.text}>{helperText}</Text>;
};

export default Caption;