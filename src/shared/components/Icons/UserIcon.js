import { FontAwesome5 } from "@expo/vector-icons";

const UserIcon = ({ size, color }) => {
  return (
    <FontAwesome5
      name="user-alt"
      size={size ?? 16}
      color={color ?? retriveColorString()}
    />
  );
};

export default UserIcon;
