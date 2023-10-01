import { InputForm } from '../../atoms/InputForm';
import { AddTodo } from '../../organisms/AddTodo/Index';
import { TodoList } from '../../organisms/TodoList/Index';
import { useTodo } from '../../../hooks/useTodo';
import styles from './style.module.css';


export const TodoTemplate = () => {

  const { addInputValue,onChangeAddInputValue,onKeyDownInputValue,searchKeyWord,onChangeSearchKeyWord,showTodoList,handleDeleteTask} =  useTodo();

  return(
    <div className={styles.container}>
      <h1>Todo List</h1>
      <section className={styles.common}>
        <AddTodo 
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          onKeyDownInputValue={onKeyDownInputValue}
        />
      </section>
      <section className={styles.common}>
        <InputForm 
          placeholder={"Search Keyword"}
          value={searchKeyWord}
          onChange={onChangeSearchKeyWord}
        />
      </section>
      <section className={styles.common}>
        <TodoList 
          TodoList={showTodoList}
          handleDeleteTask={handleDeleteTask}
        />
      </section>
    </div>
  )
}