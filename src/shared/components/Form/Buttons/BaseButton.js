import { Button, Spinner } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { retriveColorString } from "../../../utils/enums/styleEnums";

const BaseButton = ({
  onPress,
  children,
  style,
  disabled,
  loading,
  width,
  w,
  accessoryLeft,
  accessoryRight,
  ...props
}) => {
  const defaultStyle = StyleSheet.create({
    button: {
      borderRadius: 10,
      marginTop: 20,
      backgroundColor: retriveColorString(),
      borderColor: "transparent",
      width: width ?? w ?? "80%",
    },
    buttonContent: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
    },
  });

  return (
    <Button
      onPress={onPress}
      style={style ?? defaultStyle.button}
      disabled={disabled}
      accessoryLeft={accessoryLeft}
      accessoryRight={accessoryRight}
      {...props}
    >
      {!loading ? (
        <>{children}</>
      ) : (
        <Spinner style={{ backgroundColor: "white" }} />
      )}
    </Button>
  );
};

export default BaseButton;
