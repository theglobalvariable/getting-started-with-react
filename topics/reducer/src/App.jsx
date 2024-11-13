import AppName from "./components/AppName";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoItemsContextProvider from "./store/todo-items-store-provider";

function App() {
  return (
    <TodoItemsContextProvider>
      <center>
        <AppName />
        <TodoList />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
