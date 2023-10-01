import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
    <ul>
    {TodoList.map((todo: Todo, index: number) => (
      <li key={index}>
        <span>{todo.title}</span>
        <div>
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