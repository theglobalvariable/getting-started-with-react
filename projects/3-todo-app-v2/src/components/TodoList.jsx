import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  let todos = [
    {
      title: "do this",
      date: "6/11/2024",
    },
    {
      title: "do that",
      date: "16/11/2024",
    },
    {
      title: "do that again",
      date: "7/12/2024",
    },
  ];
  return (
    <>
      <AddTodo />
      <div className={styles["items-container"]}>
        {todos.map((todo) => (
          <TodoItem key={todo} title={todo.title} date={todo.date} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
