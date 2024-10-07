import theme from "../../../../theme.json";

export const styleTypeEnums = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  DANGER: "DANGER",
};

export const weightEnums = {
  LIGHT: "300",
  REGULAR: "500",
  BOLD: "700",
  100: "100",
  200: "200",
  300: "300",
  400: "400",
  500: "500",
  600: "600",
  800: "800",
  900: "900",
};

export const retriveColorString = (styleType = styleTypeEnums.PRIMARY, weigth = weightEnums[500]) => {
  let weightString = "";
  switch (weigth) {
    case weightEnums.LIGHT:
      weightString = weightEnums.LIGHT;
    case weightEnums.REGULAR:
      weightString = weightEnums.REGULAR;
    case weightEnums.BOLD:
      weightString = weightEnums.BOLD;
    default:
      weightString = weightEnums[weigth];
  }

  const colorString = `color-${styleType}-${weightString}`;

  return theme[colorString];
};
