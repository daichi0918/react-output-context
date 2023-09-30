type Todo = {
  title: string;
}
type TodoListProps = {
  TodoList: Array<Todo>;
}



export const TodoList = (props: TodoListProps) => {
  const {TodoList} = props;
  return (
    <ul>
    {TodoList.map((todo: Todo, index: number) => (
      <li key={index}>
        {todo.title}
      </li>
    ))}
  </ul>
  )
}