import "./App.css";
import TodoList from "./components/TodoList";
import TodoProvider from "./components/Providers/TodoProvider";
import TodoForm from "./components/TodoForm";
import ChangeColor from "./components/changeColor";

function App() {
  return (
    <div className="App">
      <div className="holdALl">
        <h1>TODO LIST</h1>
        <TodoProvider>
          <TodoForm />
          <TodoList />
        </TodoProvider>
        <ChangeColor />
      </div>
    </div>
  );
}

export default App;
