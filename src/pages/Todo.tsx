import { TodoTemplate } from "../components/templates/TodoTemplate";
import { TodoProvider } from "../context/TodoContext";

export const Todo = () => {

  return (
    <TodoProvider>
      <TodoTemplate />
    </TodoProvider>
  )


}