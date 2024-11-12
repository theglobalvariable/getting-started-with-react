import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  let [todos, setTodos] = useState([]);

  const onAddClickHandler = (title, date) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      date: date,
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const onDeleteClickHandler = (id) => {
    const newTodos = todos.filter((t) => t.id !== id);
    setTodos(newTodos);
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
