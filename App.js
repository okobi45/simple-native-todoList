import react, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, Platform, TextInput, TouchableOpacity } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskManager}>
        <Text style={styles.mainTitle}>Daily Task</Text>

        <View style={styles.items}>
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskManager}
      >
        <TextInput style={styles.input} placeholder={'write a task'} />

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskManager: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 25,
  },
  writeTaskManager: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {

  },
});
