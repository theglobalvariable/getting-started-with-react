import { createContext } from "react";

const TodoItemsContext = createContext({
  items: [],
  dispatchTodoItems: () => {},
});

export default TodoItemsContext;
