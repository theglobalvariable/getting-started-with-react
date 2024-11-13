const getNewId = (items) => {
  if (!items || !items.length) {
    return 1;
  }
  return items[items.length - 1].id + 1;
};

const todoItemsReducer = (currentTodos, action) => {
  if (action.type === "NEW_ITEM") {
    const newTodo = {
      id: getNewId(currentTodos),
      title: action.payload.title,
      date: action.payload.date,
    };
    return [...currentTodos, newTodo];
  } else if (action.type === "DELETE_ITEM") {
    return currentTodos.filter((t) => t.id !== action.payload.id);
  }
  return currentTodos;
};

export default todoItemsReducer;
