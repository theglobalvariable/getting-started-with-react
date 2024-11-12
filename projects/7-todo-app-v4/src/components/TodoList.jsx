import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  let [todos, setTodos] = useState([]);

  const onAddClickHandler = (title, date) => {
    const getNewId = (items) => {
      if (!items || !items.length) {
        return 1;
      }
      return items[items.length - 1].id + 1;
    };

    setTodos((currentTodos) => {
      const newTodo = {
        id: getNewId(currentTodos),
        title: title,
        date: date,
      };

      return [...currentTodos, newTodo];
    });
  };

  const onDeleteClickHandler = (id) => {
    setTodos((currentTodos) => currentTodos.filter((t) => t.id !== id));
  };

  return (
    <>
      <AddTodo onAddClickHandler={onAddClickHandler} />
      {todos && todos.length ? (
        <div className={styles["items-container"]}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              date={todo.date}
              onDeleteClickHandler={onDeleteClickHandler}
            />
          ))}
        </div>
      ) : (
        <h3>Hurray!!! You have no items left in todo.</h3>
      )}
    </>
  );
};

export default TodoList;
