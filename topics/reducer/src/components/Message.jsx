import { useContext } from "react";
import TodoItemsContext from "../store/todo-items-store";

export default function Welcome() {
  const { items } = useContext(TodoItemsContext);

  return (
    (!items || !items.length) && (
      <h3>Hurray!!! You have no items left in todo.</h3>
    )
  );
}
