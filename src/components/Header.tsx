import rocket  from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={rocket} alt="Todo list icon" />
        <p>to<span>do</span></p>
      </header>
  );
}