import styles from './TasksHeader.module.css'
import { ITask } from '../App';

interface TasksHeaderProps {
  tasks: ITask[]
}

export function TasksHeader({tasks}: TasksHeaderProps) {
  function getAmmountOfTasksDone() {
    if (tasks.length == 0) return 0;

    let ammountOfTasksDone = tasks.reduce((acc, el) => {
      if(el.done) acc++;
      return acc;
    }, 0);
    
    return `${ammountOfTasksDone} of ${tasks.length}`;
  }
  
  return (
    <header className={styles.tasksHeader}>
      <div className={styles.tasksCreated}>
        <span>Tasks Created</span>
        <span className={styles.badge}>{tasks.length}</span>
      </div>
      
      <div className={styles.tasksCompleted}>
        <span>Tasks Done</span>
        <span className={styles.badge}>{getAmmountOfTasksDone()}</span>
      </div>
    </header>
  );
}