import FindScreen from "./FindScreen";
import ReservesScreen from "./ReservesScreen";
import SearchIcon from "../../shared/components/Icons/SearchIcon";
import ReservesIcon from "../../shared/components/Icons/ReservesIcon";
// import UserScreen from "./UserScreen";

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
  // {
  //   name: "Usuário",
  //   component: UserScreen,
  //   options: { headerShown: false },
  //   icon: UserIcon,
  // },
];

export const initialTabRouteName = "Buscar";
