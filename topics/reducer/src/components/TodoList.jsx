import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";
import Welcome from "./Message";
import TodoItemsContext from "../store/todo-items-store";
import { useContext } from "react";

const TodoList = () => {
  const { items } = useContext(TodoItemsContext);
  return (
    <>
      <AddTodo />
      <Welcome />
      <div className={styles["items-container"]}>
        {items.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            date={todo.date}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
