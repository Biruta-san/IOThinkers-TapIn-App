import LoginScreen from "./src/screens/LoginScreen";

const routes = [
  {
    name: "Login",
    component: LoginScreen,
    options: { headerShown: false },
  },
];

export const initialRouteName = "Login";

export default routes;
