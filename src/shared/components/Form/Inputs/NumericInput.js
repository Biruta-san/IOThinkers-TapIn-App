import { Input as KInput } from "@ui-kitten/components";
import Caption from "./Caption";
import { StyleSheet } from "react-native";

const NumericInput = ({
  value,
  label,
  helperText,
  placeholder,
  onChange,
  style,
  marginTop,
  w,
  width,
}) => {
  const styles = StyleSheet.create({
    container: {
      width: w ?? width ?? "80%",
      borderRadius: 10,
      marginTop: marginTop ?? 0,
    },
  });

  const handleChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, "");
    onChange(numericValue);
  };

  return (
    <KInput
      value={value}
      label={label}
      style={style ?? styles.container}
      caption={() => Caption(helperText)}
      placeholder={placeholder}
      onChangeText={handleChange}
      keyboardType="numeric" 
    />
  );
};

export default NumericInput;
