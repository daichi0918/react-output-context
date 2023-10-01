import {createContext, useContext} from 'react';
import type { ReactNode } from 'react';
import { useTodo } from '../hooks/useTodo';

const TodoContext = createContext({});

type TodoProviderProps = {
  children: ReactNode
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const {
    addInputValue,
    onChangeAddInputValue,
    onKeyDownInputValue,
    searchKeyWord,
    onChangeSearchKeyWord,
    showTodoList,
    handleDeleteTask,
  } = useTodo();

  return (
    <TodoContext.Provider
      value={{
        addInputValue,
        onChangeAddInputValue,
        onKeyDownInputValue,
        searchKeyWord,
        onChangeSearchKeyWord,
        showTodoList,
        handleDeleteTask,
      }}
      >
        {children}
      </TodoContext.Provider>
  )
}