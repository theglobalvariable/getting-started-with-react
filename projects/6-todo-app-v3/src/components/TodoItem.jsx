import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

const TodoItem = ({ id, title, date, onDeleteClickHandler }) => {
  return (
    <div className="container">
      <div className={`row ${styles["my-row"]}`}>
        <div className="col-6">{title}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-danger ${styles["my-button"]}`}
            onClick={() => onDeleteClickHandler(id)}
          >
            Remove
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
  onDeleteClickHandler: PropTypes.func,
};

export default TodoItem;
