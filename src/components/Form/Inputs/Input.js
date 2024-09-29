import { Input as KInput } from "@ui-kitten/components";
import Caption from "./Caption";

const Input = ({
  value,
  label,
  helperText,
  placeholder,
  secureTextEntry,
  onChange,
}) => {
  return (
    <KInput
      value={value}
      label={label}
      caption={() => Caption(helperText)}
      placeholder={placeholder}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
