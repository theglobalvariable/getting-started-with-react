import AppName from "./components/AppName";
import "./App.css";
import TodoList from "./components/TodoList";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";

function App() {
  let [items, setItems] = useState([]);

  const addItem = (title, date) => {
    const getNewId = (items) => {
      if (!items || !items.length) {
        return 1;
      }
      return items[items.length - 1].id + 1;
    };

    setItems((currentTodos) => {
      const newTodo = {
        id: getNewId(currentTodos),
        title: title,
        date: date,
      };

      return [...currentTodos, newTodo];
    });
  };

  const deleteItem = (id) => {
    setItems((currentTodos) => currentTodos.filter((t) => t.id !== id));
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items,
        addItem,
        deleteItem,
      }}
    >
      <center>
        <AppName />
        <TodoList />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
