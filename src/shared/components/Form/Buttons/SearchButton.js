import { MaterialIcons } from "@expo/vector-icons";
import BaseButton from "./BaseButton";
import { StyleSheet } from "react-native";
import { styleTypeEnums } from "../../../../utils/enums/styleEnums";
import { weightEnums } from "../../../../utils/enums/styleEnums";
import { retriveColorString } from "../../../../utils/enums/styleEnums";

const SearchButton = ({ onClick }) => {
  const style = StyleSheet.create({
    searchButton: {
      backgroundColor: retriveColorString(
        styleTypeEnums.INFO,
        weightEnums[500]
      ),
      borderRadius: 10,
      width: "80%",
      marginTop: 20,
    },
  });

  const SearchIcon = () => {
    return <MaterialIcons name="search-sharp" size={24} color={"white"} />;
  };

  return (
    <BaseButton
      style={style.searchButton}
      accessoryLeft={<SearchIcon />}
      onClick={onClick}
    >
      Pesquisar
    </BaseButton>
  );
};

export default SearchButton;
