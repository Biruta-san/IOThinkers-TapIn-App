import Text from "../../Typography/Text";

const Caption = (helperText) => {
  const styles = {
    color: "black",
    fontSize: 12,
    opacity: 0.8
  }

  return <Text style={styles}>{helperText}</Text>;
};

export default Caption;