import React, { useState } from "react";
import { Keyboard, Text, View, Alert } from "react-native";

import Task from "./components/Task";
import WriteTask from "./components/WriteTask";
import styles from "./AppStyle";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  function handleAddTask() {
    if (task?.trim().length > 0) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, { text: task.trim(), completed: false }]);
      setTask(null);
      Alert.alert("✔️", "Tarea agregada");
    }else{
      Alert.alert("Error", "Por favor agregue una tarea");
    }
  }

  //Eliminar tarea
  function handleDelete(index) {
    const updated = [...taskItems];
    updated.splice(index, 1);
    setTaskItems(updated);
      Alert.alert("✔️", "Tarea eliminada");

  }

  //Completar tarea
  function handleToggleComplete(index) {
    const updated = [...taskItems];
    updated[index].completed = !updated[index].completed;
    setTaskItems(updated);
  }

  //Editar Tarea
  function handleEdit(index, newText) {
    if (newText?.trim().length > 0) {
      const updated = [...taskItems];
      updated[index].text = newText;
      setTaskItems(updated);
      Alert.alert("✔️", "Tarea editada");
    }else{
      Alert.alert("Error", "No puede dejar en blanco");

    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <Task
              key={index}
              text={item.text}
              completed={item.completed}
              onDelete={() => handleDelete(index)}
              onToggleComplete={() => handleToggleComplete(index)}
              onEdit={(newText) => handleEdit(index, newText)}
            />
          ))}
        </View>
      </View>
      <WriteTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </View>
  );
}
