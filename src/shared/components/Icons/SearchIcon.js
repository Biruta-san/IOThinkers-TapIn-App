import { FontAwesome } from "@expo/vector-icons";
import { retriveColorString } from "../../utils/enums/styleEnums";

const SearchIcon = ({ color, size }) => {
  return (
    <FontAwesome
      name="search"
      size={size ?? 16}
      color={color ?? retriveColorString()}
    />
  );
};

export default SearchIcon;
