import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

export default function Welcome() {
  const { items } = useContext(TodoItemsContext);

  return (
    (!items || !items.length) && (
      <h3>Hurray!!! You have no items left in todo.</h3>
    )
  );
}
