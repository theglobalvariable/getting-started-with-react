import PropTypes from "prop-types";
import { useState } from "react";
import styles from "./TodoList.module.css";

function AddTodo({ onAddClickHandler }) {
  let [title, setTitle] = useState("");
  let [date, setDate] = useState("");

  return (
    <div className="container">
      <div className={`row ${styles["my-row"]}`}>
        <div className="col-6">
          <input
            onChange={(event) => setTitle(event.target.value)}
            type="text"
            placeholder="Enter Todo Here"
            value={title}
          />
        </div>
        <div className="col-4">
          <input
            onChange={(event) => setDate(event.target.value)}
            type="date"
            value={date}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles["my-button"]}`}
            onClick={() => {
              onAddClickHandler(title, date);
              setTitle("");
              setDate("");
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

AddTodo.propTypes = { onAddClickHandler: PropTypes.func };

export default AddTodo;
