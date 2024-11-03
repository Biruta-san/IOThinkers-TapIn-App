import Accordion from "react-native-collapsible/Accordion";
import { retriveColorString } from "../../utils/enums/styleEnums";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import Text from "../Typography/Text";
import { Divider } from "@ui-kitten/components";

const CustomAccordion = ({
  sections,
  activeSections,
  setActiveSections,
  underlayColor,
}) => {
  // #region HOOKS
  const [localActiveSections, setLocalActiveSections] = useState([]);
  // #endregion

  // #region FUNCTIONS
  const getActiveSections = () => {
    return activeSections ?? localActiveSections;
  };

  const handleSetActiveSections = (newActiveSections) => {
    if (setActiveSections) {
      setActiveSections(newActiveSections);
    } else {
      setLocalActiveSections(newActiveSections);
    }
  };
  // #endregion

  // #region COMPONENTS
  const AccordionContent = (section) => {
    return (
      <View style={styles.accordionContent}>
        {section?.content || <Text>No Content</Text>}
      </View>
    );
  };

  const AccordionHeader = (section, _, isActive) => {
    return (
      <>
        <Text style={isActive ? styles.activeTitle : styles.inactiveTitle}>
          {section?.title || "Untitled"}
        </Text>
        <Divider
          style={{
            backgroundColor: retriveColorString() || "#ccc",
            height: 1.5,
          }}
        />
      </>
    );
  };

  const AccordionTouchable = (section) => {
    return (
      <TouchableOpacity
        onPress={section?.onPress}
        style={styles.accordionHeader}
      >
        {section?.children || <Text>No Content</Text>}
      </TouchableOpacity>
    );
  };
  // #endregion

  return (
    <Accordion
      sections={sections}
      activeSections={getActiveSections()}
      renderHeader={AccordionHeader}
      renderContent={AccordionContent}
      onChange={(newActiveSections) => {
        handleSetActiveSections(newActiveSections);
      }}
      touchableComponent={AccordionTouchable}
      underlayColor={underlayColor ?? "transparent"}
    />
  );
};

const styles = StyleSheet.create({
  accordionHeader: {
    width: "100%",
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5,
  },
  accordionContent: {
    width: "100%",
    padding: 10,
  },
  activeTitle: {
    fontWeight: "bold",
  },
  inactiveTitle: {
    color: "#333",
  },
});

export default CustomAccordion;
