import styles from "./TodoList.module.css";
import { BiMessageSquareAdd } from "react-icons/bi";
import { useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  let titleEle = useRef();
  let dateEle = useRef();

  const { addItem } = useContext(TodoItemsContext);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();

    const title = titleEle.current.value;
    const date = dateEle.current.value;
    if (title && date) {
      addItem(title, date);
      titleEle.current.value = "";
      dateEle.current.value = "";
    }
  };

  return (
    <div className="container">
      <form
        className={`row ${styles["my-row"]}`}
        onSubmit={onFormSubmitHandler}
      >
        <div className="col-6">
          <input
            type="text"
            name="title"
            ref={titleEle}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input name="date" type="date" ref={dateEle} />
        </div>
        <div className="col-2">
          <button className={`btn btn-success ${styles["my-button"]}`}>
            <BiMessageSquareAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
