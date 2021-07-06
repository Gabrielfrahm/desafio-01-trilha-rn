import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';
import { ThemeDark } from '../components/ThemeDark';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isDark, setIsDark] = useState(false);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if (newTaskTitle !== '') {
      const data = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      setTasks([...tasks, data]);
    }
  }


  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists
    tasks.filter(item => {
      item.id === id ? item.done = !item.done : null
      return setTasks([...tasks]);
    });

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    console.log('chegou');
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  }
  
  return (
    <View style={[style.container, isDark ? {backgroundColor: '#191622'} : { backgroundColor: '#fff'} ]}>
      <Header dark={isDark} />

      <TodoInput dark={isDark} addTask={handleAddTask} />

      <MyTasksList
        dark={isDark}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />

      <ThemeDark 
        onPress={() => setIsDark(!isDark)}
        dark={isDark}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})