import styles from "./TodoList.module.css";
function AddTodo() {
  return (
    <div className="container">
      <div className={`row ${styles["my-row"]}`}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`btn btn-success ${styles["my-button"]}`}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
