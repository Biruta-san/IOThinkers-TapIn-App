import { FontAwesome, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";
import FindScreen from "./FindScreen";
import ReservesScreen from "./ReservesScreen";
import UserScreen from "./UserScreen";

const SearchIcon = () => {
  return <FontAwesome name="search" size={16} color={retriveColorString()} />;
};

const ReservesIcon = () => {
  return (
    <FontAwesome6 name="ticket-simple" size={16} color={retriveColorString()} />
  );
};

const UserIcon = () => {
  return (
    <FontAwesome5 name="user-alt" size={16} color={retriveColorString()} />
  );
};

export const tabRoutes = [
  {
    name: "Buscar",
    component: FindScreen,
    options: { headerShown: false },
    icon: SearchIcon,
  },
  {
    name: "Reservas",
    component: ReservesScreen,
    options: { headerShown: false },
    icon: ReservesIcon,
  },
  {
    name: "Usuário",
    component: UserScreen,
    options: { headerShown: false },
    icon: UserIcon,
  },
];

export const initialTabRouteName = "Buscar";
