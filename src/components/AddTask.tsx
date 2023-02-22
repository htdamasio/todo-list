import { PlusCircle } from "phosphor-react";
import styles from './AddTask.module.css'
import { ChangeEvent, FormEvent, useState } from "react";

interface AddTaskProps {
  onAddTask: (content: string) => void
}

export function AddTask({onAddTask}: AddTaskProps) {
  const [addTask, setAddTask] = useState('');

  function handleAddTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')    
    setAddTask(event.target.value)
  }

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault()

    onAddTask(addTask);
    setAddTask('');
  }

  function handleNewTaskInvalid(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('This field is required!')
  }

  return (
    <form
      onSubmit={handleAddNewTask}
      className={styles.addTask}
    >
      <input
        type="text"
        placeholder='Add a new task'
        value={addTask}
        onChange={handleAddTaskTextChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button>
        Add
        <PlusCircle weight="bold" size={16}/>
      </button>
    </form>
  );
}