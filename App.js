import React from 'react';
import { Text, View } from 'react-native'; 
import Task from './components/Task';

import styles from "./AppStyle";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go - Aquí es donde irán las tareas.*/}

          <Task text={"hola"} />
           <Task text={"hola2"} />
        </View>
      </View>
    </View>
  );
}


