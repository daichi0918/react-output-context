import React, { useState, useMemo } from 'react';
import { INIT_TODO_LIST } from '../constants/data';

export const useTodo = () => {
  const [addInputValue, setAddInputValue] = useState<string>('');
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  const onChangeAddInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAddInputValue(e.target.value);
  const onChangeSearchKeyWord = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchKeyWord(e.target.value);

  const onKeyDownInputValue = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && addInputValue !== '') {
      const newTodoList = [...originTodoList, { title: addInputValue }];
      setOriginTodoList(newTodoList);
    }
  };

  const handleDeleteTask = (index: number) => {
    const newTodos = [...originTodoList];
    newTodos.splice(index, 1);
    setOriginTodoList(newTodos);
  };

  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      // 検索キーワードに部分一致したTodoだけを一覧表示する
      const regexp = new RegExp('^' + searchKeyWord, 'i');
      return todo.title.match(regexp);
    });
    // useMemoの第二引数([originTodoList, searchKeyword])に依存して処理が実行される
    // originTodoListとsearchKeywordの値が変更される度にfilterの検索処理が実行
    // ただし結果が前回と同じならキャッシュを返却し処理は実行されない(無駄な処理を省いている)
    // 詳しくはuseMemoを調べてください。
  }, [originTodoList, searchKeyWord]);

  return {
    addInputValue,
    onChangeAddInputValue,
    onKeyDownInputValue,
    searchKeyWord,
    onChangeSearchKeyWord,
    showTodoList,
    handleDeleteTask,
  };
};
