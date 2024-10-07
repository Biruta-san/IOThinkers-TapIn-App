import { Button, Spinner } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { retriveColorString } from "../../../utils/enums/styleEnums";

const BaseButton = ({ onPress, children, style, disabled, loading, ...props }) => {
  const defaultStyle = StyleSheet.create({
    button: {
      color: "white",
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: retriveColorString(),
      justifyContent: "center",
      borderColor: "transparent",
    },
  });

  return (
    <Button onPress={onPress} style={style ?? defaultStyle.button} disabled={disabled} {...props}>
      {!loading ? children : <Spinner style={{ backgroundColor: "white" }} />}
    </Button>
  );
};

export default BaseButton;
