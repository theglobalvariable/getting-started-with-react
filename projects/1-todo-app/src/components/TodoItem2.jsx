function TodoItem2() {
  let todoTitle = "Do that";
  let todoDate = "11/11/2024";

  return (
    <div class="container">
      <div class="row my-row">
        <div class="col-6">{todoTitle}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger my-button">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;
