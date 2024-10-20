import { FontAwesome } from "@expo/vector-icons";
import BaseButton from "./BaseButton";
import Text from "../../Typography/Text";

const SearchButton = ({ onClick }) => {

  const SearchIcon = () => {
    return <FontAwesome style={{marginRight: 10}} name="search" size={16} color={"white"} />;
  };

  return (
    <BaseButton accessoryLeft={<SearchIcon />} onClick={onClick}>
      <Text color={"white"}>
        Pesquisar
      </Text>
    </BaseButton>
  );
};

export default SearchButton;
