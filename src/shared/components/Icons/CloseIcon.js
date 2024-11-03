import { Ionicons } from "@expo/vector-icons";
import { retriveColorString } from "../../utils/enums/styleEnums";

const CloseIcon = ({ size, color }) => {
  return (
    <Ionicons
      name="close"
      size={size ?? 16}
      color={color ?? retriveColorString()}
    />
  );
};

export default CloseIcon;
