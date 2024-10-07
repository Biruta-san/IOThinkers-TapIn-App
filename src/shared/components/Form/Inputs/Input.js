import { Input as KInput } from "@ui-kitten/components";
import Caption from "./Caption";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const Input = ({
  value,
  label,
  helperText,
  placeholder,
  onChange,
  style,
  marginTop,
  isPassword,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: "80%",
      borderRadius: 10,
      marginTop: marginTop ?? 0,
    },
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleVisibilityChange = () => {
    setPasswordVisible(!passwordVisible);
  };

  const PasswordIcon = () => {
    return (
      isPassword && (
        <TouchableWithoutFeedback onPress={handleVisibilityChange}>
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="black"
          />
        </TouchableWithoutFeedback>
      )
    );
  };

  return (
    <KInput
      value={value}
      label={label}
      style={style ?? styles.container}
      caption={() => Caption(helperText)}
      placeholder={placeholder}
      onChangeText={onChange}
      secureTextEntry={!passwordVisible && isPassword}
      accessoryRight={<PasswordIcon />}
    />
  );
};

export default Input;
