import { Button } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";

interface ModalComponentProps {
  toggle: () => void;
  isVisible: boolean;
  title: string;
  body: string;
  btnTitle: string;
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    borderColor: "rgba(0, 0, 0, 0.1)",
    height: 250
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: "700"
  },
  contentBody: {
    fontSize: 17,
    marginBottom: 16,
    fontWeight: "500",
    color: "#ccc",
    textAlign: "center"
  },
  modalBtn: {
    backgroundColor: "#535BFE",
    justifyContent: "center",
    height: 40,
    borderRadius: 20,
    shadowColor: "#535BFE",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    padding: 13
  },
  modalBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});

const ModalComponent: React.FC<ModalComponentProps> = ({
  toggle,
  isVisible,
  body,
  btnTitle,
  title
}) => {
  return (
    <Modal onBackdropPress={toggle} isVisible={isVisible}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{title}</Text>
        <Text style={styles.contentBody}>{body}</Text>
        <Button onPress={toggle} style={styles.modalBtn}>
          <Text style={styles.modalBtnText}>{btnTitle}</Text>
        </Button>
      </View>
    </Modal>
  );
};

export default ModalComponent;
