import { CheckCircle, Circle, Trash } from "phosphor-react";
import styles from './Task.module.css'

interface TaskProps {
  completed?: Boolean,
  content: string
  onRemoveTask: (content: string) => void 
  onToggleTask: (content: string) => void
}

export function Task({completed = false, content, onRemoveTask, onToggleTask}: TaskProps) {
  function handleRemoveTask() {
    onRemoveTask(content);
  }

  function handleToggleTask() {
    onToggleTask(content)
  }

  return (
    <div className={!completed ? styles.uncompletedTask : styles.completedTask}>
      <div className={styles.checkbox}>
        {!completed ? <Circle onClick={handleToggleTask} size={24} /> : <CheckCircle onClick={handleToggleTask} size={24} weight="fill" />}
      </div>
      <p>{content}</p>
      <Trash  
        onClick={handleRemoveTask}
        size={24}
      />
    </div>
  );
}