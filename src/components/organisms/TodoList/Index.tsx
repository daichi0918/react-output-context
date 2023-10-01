import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import styles from './style.module.css';

type Todo = {
  title: string;
}
type TodoListProps = {
  TodoList: Array<Todo>;
  handleDeleteTask: (index: number) => void;
}



export const TodoList = (props: TodoListProps) => {
  const {TodoList,handleDeleteTask} = props;
  return (
    <ul className={styles.list}>
    {TodoList.map((todo: Todo, index: number) => (
      <li key={index} className={styles.todo}>
        <span className={styles.task}>{todo.title}</span>
        <div className={styles.far}>
            {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
            <FontAwesomeIcon
              icon={faTrashAlt}
              size="lg"
              onClick={() => handleDeleteTask(index)}
            />
          </div>
      </li>
    ))}
  </ul>
  )
}