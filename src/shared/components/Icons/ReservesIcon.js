import { FontAwesome6 } from "@expo/vector-icons";
import { retriveColorString } from "../../utils/enums/styleEnums";

const ReservesIcon = ({ size, color }) => {
  return (
    <FontAwesome6
      name="ticket-simple"
      size={size ?? 16}
      color={color ?? retriveColorString()}
    />
  );
};

export default ReservesIcon;
