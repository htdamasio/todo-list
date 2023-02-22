import styles from './App.module.css'
import './global.css'

import { Header } from './components/Header'
import { TasksHeader } from './components/TasksHeader'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'
import { useState } from 'react'

export interface ITask {
  text: string;
  done: Boolean,
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  function addTask(content: string){
    setTasks([...tasks, {
      text:content,
      done: false
    }])
  }

  function removeTask(content: string) {
    const tasksWithoutTheRemovedOne = tasks.filter(task => { return task.text !== content })
    setTasks(tasksWithoutTheRemovedOne);
  }

  function toggleTask(content: string) {
    const tasksWithToggledOne = tasks.reduce((acc, task) => { 
      if (task.text === content) task.done = !task.done
      
      if (task.done) acc.toggled.push(task)
      else acc.elements.push(task)
      return acc;
    }, {elements: new Array<ITask>(), toggled: new Array<ITask>()});
    setTasks([...tasksWithToggledOne.elements.concat(tasksWithToggledOne.toggled)]);
  }

  return (
    <div className={styles.todolist}>
      <Header />

      <main className={styles.content}>
        <AddTask onAddTask={addTask}/>

        <TasksHeader tasks={tasks}/>
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onToggleTask={toggleTask}
        />
      </main>
    </div>
  )
}

export default App
