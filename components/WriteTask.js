import React from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "./WriteTaskStyle";
export default function WriteTask(props) {
  const {task, setTask, handleAddTask} = props;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={text => setTask(text)}  />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.assWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView> 
  );
}
