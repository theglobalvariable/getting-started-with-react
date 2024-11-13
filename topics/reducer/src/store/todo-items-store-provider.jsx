import { useReducer } from "react";
import todoItemsReducer from "./todo-items-reducer";
import PropTypes from "prop-types";
import TodoItemsContext from "./todo-items-store";

const TodoItemsContextProvider = ({ children }) => {
  let [items, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  return (
    <TodoItemsContext.Provider
      value={{
        items,
        dispatchTodoItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

TodoItemsContextProvider.propTypes = {
  children: PropTypes.any,
};

export default TodoItemsContextProvider;
