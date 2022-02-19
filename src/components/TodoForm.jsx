import { useState } from "react";
import { useTodoContext } from "./Providers/TodoProvider";
import { useSelector } from "react-redux";

export default function TodoForm() {
  const { totalNumber, addTodo } = useTodoContext();
  const [todoItem, setTodoItem] = useState("");
  const themeColor = useSelector((state) => state.theme.value);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!todoItem) {
      return;
    }
    addTodo(todoItem);
    setTodoItem("");
  };
  return (
    <form>
      <h3>Number of todo items: {totalNumber()}</h3>
      <input
        type="text"
        className="inputForm"
        placeholder="Input Todo Task"
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button
        type="Submit"
        className="submit"
        style={{ backgroundColor: themeColor }}
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </form>
  );
}
