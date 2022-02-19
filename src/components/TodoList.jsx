import { useTodoContext } from "./Providers/TodoProvider";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function TodoList() {
  const themeColor = useSelector((state) => state.theme.value);
  const { todoList, removeTodo } = useTodoContext();

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index} className="listName">
          {todo}
          <FaTrash
            className="trash"
            style={{ color: themeColor }}
            onClick={() => removeTodo(index)}
          />
        </li>
      ))}
    </ul>
  );
}
