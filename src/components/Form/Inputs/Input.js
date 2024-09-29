import { Input as KInput } from "@ui-kitten/components";
import Text from "../../Typography/Text";

const Input = ({
  value,
  label,
  helperText,
  placeholder,
  onChangeText,
  secureTextEntry,
}) => {

  const renderCaption = () => {
    return <Text>{helperText}</Text>;
  };

  return (
    <KInput
      value={value}
      label={label}
      caption={renderCaption}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
