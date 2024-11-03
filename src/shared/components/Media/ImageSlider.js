import {
  SimpleImageSlider,
  SimpleImageSliderThemeProvider,
} from "@one-am/react-native-simple-image-slider";
import { StyleSheet, View } from "react-native";
import Text from "../Typography/Text";

const PageCounter = (props) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        ...props.style,
        padding: 4,
        borderRadius: 4,
        position: "absolute",
        bottom: 30,
        left: 16
      }}
    >
      <Text fontSize={12} useThemeColor fontWeight={"bold"}>
        {props.currentPage} de {props.totalPages}
      </Text>
    </View>
  );
};

const ImageSlider = ({
  images,
  fullScreenEnabled = true,
  imageBorderRadius,
}) => {
  const styles = StyleSheet.create({
    hotelImage: {
      borderRadius: imageBorderRadius ?? 8,
      resizeMode: "cover",
    },
  });

  return (
    <SimpleImageSliderThemeProvider>
      <SimpleImageSlider
        data={images.map((x, i) => ({ source: x, key: i.toString() }))}
        fullScreenEnabled={fullScreenEnabled}
        imageStyle={styles.hotelImage}
        PageCounterComponent={PageCounter}
      />
    </SimpleImageSliderThemeProvider>
  );
};

export default ImageSlider;
