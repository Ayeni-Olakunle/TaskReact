import { createContext, useContext, useState } from "react";

const TodoContext = createContext();
const initialTodoListState = ["React React Context API and Reduxtoolkit"];

export default function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState(initialTodoListState);
  const totalNumber = () => todoList.length;
  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };
  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => index !== todoIndex);
    setTodoList(newList);
  };
  const contextValue = {
    todoList,
    totalNumber,
    addTodo,
    removeTodo,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
