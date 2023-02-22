import { Clipboard } from 'phosphor-react';
import { Task } from './Task';
import styles from './TaskList.module.css'
import { ITask } from '../App';

interface TaskListProps {
  tasks: ITask[]
  onRemoveTask: (content: string) => void 
  onToggleTask: (content: string) => void
}

export function TaskList({tasks, onRemoveTask, onToggleTask}: TaskListProps) {
  return (
    <div className={styles.taskContent}>
      {
        tasks.length == 0 ? 
      
        <div className={styles.noTasks}>
          <Clipboard size={56}/>
          <div className={styles.noTasksContent}>
            <strong>You haven't added any tasks yet</strong>
            <span>Create tasks and organize your to-do items</span>
          </div>
        </div> 
        : 
        tasks.map(task => {
          return (
            <Task 
              key={task.text} 
              completed={task.done} 
              content={task.text}
              onRemoveTask={onRemoveTask}
              onToggleTask={onToggleTask}
            />
          )
        })
      }
    </div>
  );
}