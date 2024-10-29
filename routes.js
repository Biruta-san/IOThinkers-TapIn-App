import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";
import ReservarScreen from "./src/screens/ReservarScreen";

const routes = [
  {
    name: "Login",
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: "Main",
    component: MainScreen,
    options: { headerShown: false },
  },
  {
    name: "Reservar",
    component: ReservarScreen,
    options: { headerShown: false },
  },
];

export const initialRouteName = "Main";

export default routes;
