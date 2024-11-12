import PropTypes from "prop-types";
import styles from "./TodoList.module.css";
import { BiMessageSquareAdd } from "react-icons/bi";

function AddTodo({ onAddClickHandler }) {
  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const date = formData.get("date");
    if (title && date) {
      onAddClickHandler(title, date);
      event.target.reset();
    }
  };

  return (
    <div className="container">
      <form
        className={`row ${styles["my-row"]}`}
        onSubmit={onFormSubmitHandler}
      >
        <div className="col-6">
          <input type="text" name="title" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input name="date" type="date" />
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

AddTodo.propTypes = { onAddClickHandler: PropTypes.func };

export default AddTodo;
