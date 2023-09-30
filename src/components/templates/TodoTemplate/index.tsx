import React,{useState, useMemo} from 'react';
import { INIT_TODO_LIST } from '../../../constants/data';
import { InputForm } from '../../atoms/InputForm';
import { AddTodo } from '../../organisms/AddTodo/Index';
import { TodoList } from '../../organisms/TodoList/Index';
import { Todo } from '../../../pages/Todo';


export const TodoTemplate = () => {

  const [addInputValue, setAddInputValue] = useState<string>('');
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  const onChangeAddInputValue = (e: React.ChangeEvent<HTMLInputElement>) => setAddInputValue(e.target.value);
  const onChangeSearchKeyWord = (e: React.ChangeEvent<HTMLInputElement>) => setSearchKeyWord(e.target.value);

  const onKeyDownInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && addInputValue !== '') {
      const newTodoList = [...originTodoList, {title: addInputValue}];
      setOriginTodoList(newTodoList);
    }
  }

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp("^" + searchKeyWord, "i");
      return todo.title.match(regexp);
    });
    // useMemoの第二引数([originTodoList, searchKeyword])に依存して処理が実行される
    // originTodoListとsearchKeywordの値が変更される度にfilterの検索処理が実行
    // ただし結果が前回と同じならキャッシュを返却し処理は実行されない(無駄な処理を省いている)
    // 詳しくはuseMemoを調べてください。
  }, [originTodoList, searchKeyWord]);

  return(
    <div>
      <h1>Todo List</h1>
      <section>
        <AddTodo 
          addInputValue={addInputValue}
          onChangeAddInputValue={onChangeAddInputValue}
          onKeyDownInputValue={onKeyDownInputValue}
        />
      </section>
      <section>
        <InputForm 
          placeholder={"Search Keyword"}
          value={searchKeyWord}
          onChange={onChangeSearchKeyWord}
        />
      </section>
      <section>
        <TodoList 
          TodoList={showTodoList}
        />
      </section>
    </div>
  )
}