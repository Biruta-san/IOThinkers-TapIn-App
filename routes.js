import LoginScreen from "./src/screens/LoginScreen";
import MainScreen from "./src/screens/MainScreen";

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
];

export const initialRouteName = "Main";

export default routes;
