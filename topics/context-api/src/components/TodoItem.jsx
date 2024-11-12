import PropTypes from "prop-types";
import styles from "./TodoList.module.css";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItem = ({ id, title, date }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={`row ${styles["my-row"]}`}>
        <div className="col-6">{title}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles["my-button"]}`}
            onClick={() => deleteItem(id)}
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default TodoItem;
