import React, {useState} from 'react';
import { Text, View } from 'react-native'; 

import Task from './components/Task';
import WriteTask from './components/WriteTask';

import styles from "./AppStyle";

export default function App() {
  const [task, setTask] = useState();
  const [taksItems, setTaskItems] = useState([]);

  function handleAddTask() {
    if (task.trim().length > 0) {
      setTaskItems([...taksItems, task.trim()]);
      setTask(null);
    }
    
  }
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>Today's tasks</Text>
        <View style={styles.items}>
          {/*This is where the tasks will go - Aquí es donde irán las tareas.*/}
          {
            taksItems.map((item, index) => {
             return <Task key={index} text={item} />
            })
          }
        </View>
      </View>
      {/* write a task - agregar tarea*/}
      <WriteTask 
       task={task} 
       setTask={setTask} 
       handleAddTask={handleAddTask}
      />
    </View>
  );
}


