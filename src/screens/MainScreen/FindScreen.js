import { useState } from "react";
import Layout from "../../shared/components/Layouts/Layout";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { retriveColorString } from "../../shared/utils/enums/styleEnums";
import Accordion from "react-native-collapsible/Accordion";
import { Divider } from "@ui-kitten/components";
import SearchButton from "../../shared/components/Form/Buttons/SearchButton";
import Input from "../../shared/components/Form/Inputs/Input";
import RangeDatepicker from "../../shared/components/Form/Inputs/RangeDatePicker";
import NumericInput from "../../shared/components/Form/Inputs/NumericInput";

const FindScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeSections, setActiveSections] = useState([]);
  const [onde, setOnde] = useState(null);
  const [quando, setQuando] = useState({});
  const [quantasPessoas, setQuantasPessoas] = useState(null);

  const handleCloseModal = () => {
    setModalVisible(false);
    setActiveSections([]);
  };

  const renderReader = (section, _, isActive) => {
    return (
      <>
        <Text style={isActive ? styles.activeTitle : styles.inactiveTitle}>
          {section.title}
        </Text>
        <Divider
          style={{ backgroundColor: retriveColorString(), height: 1.5 }}
        />
      </>
    );
  };

  const renderContent = (section) => {
    return <View style={styles.accordionContent}>{section.content}</View>;
  };

  const SECTIONS = [
    {
      title: "Para onde?",
      content: (
        <Input
          value={onde}
          w={"100%"}
          onChange={(value) => setOnde(value)}
          label={"Destino da viagem"}
          placeholder={"Informe a cidade ou hotel"}
        />
      ),
    },
    {
      title: "Quando?",
      content: (
        <RangeDatepicker
          range={quando}
          onSelect={(nextRange) => setQuando(nextRange)}
          label={"Período da viagem"}
          placeholder={"Selecione o período"}
        />
      ),
    },
    {
      title: "Quantas Pessoas?",
      content: (
        <NumericInput
          value={quantasPessoas}
          onChange={(value) => setQuantasPessoas(value)}
          w={"100%"}
          placeholder={"Quantidade de pessoas"}
          label={"Informe a quantidade de pessoas"}
        />
      ),
    },
  ];

  const SearchIcon = () => {
    return <FontAwesome name="search" size={16} color={retriveColorString()} />;
  };

  const CloseIcon = () => {
    return <Ionicons name="close" size={16} color={retriveColorString()} />;
  };

  const renderTouchable = (section) => {
    return (
      <TouchableOpacity
        onPress={section.onPress}
        style={styles.accordionHeader}
      >
        {section.children}
      </TouchableOpacity>
    );
  };

  return (
    <Layout flex={1}>
      <Layout flex={1} justifyContent={"start"} bg={"white"} paddingTop={10}>
        <View style={styles.shadowView}>
          <TouchableOpacity
            style={styles.touch}
            activeOpacity={1}
            onPress={() => setModalVisible(true)}
          >
            <View style={styles.container}>
              <SearchIcon />
              <Text>Find Screen</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Layout>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContent}>
          <View style={styles.closeIconContainer}>
            <TouchableOpacity onPress={handleCloseModal}>
              <CloseIcon />
            </TouchableOpacity>
          </View>
          <View style={styles.accordionContainer}>
            <Accordion
              sections={SECTIONS}
              activeSections={activeSections}
              renderHeader={renderReader}
              renderContent={renderContent}
              onChange={(activeSections) => {
                setActiveSections(activeSections);
              }}
              touchableComponent={renderTouchable}
              underlayColor="transparent"
            />
          </View>

          <SearchButton>
            <Text style={styles.buttonText}>Buscar</Text>
          </SearchButton>
        </View>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  shadowView: {
    height: 35,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 30,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  touch: {
    height: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "black",
  },
  modalContent: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginLeft: 10,
  },
  accordionContainer: {
    width: "100%",
    paddingHorizontal: 20,
    flex: 1,
  },
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
  activeHeader: {
    // Active header style (removed background color)
  },
  activeTitle: {
    fontWeight: "bold",
  },
  inactiveTitle: {
    color: "#333",
  },
  closeIconContainer: {
    alignSelf: "flex-start",
    marginStart: 20,
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButton: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    alignItems: "center",
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default FindScreen;