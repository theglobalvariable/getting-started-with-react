import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import FoodGroup from "./components/FoodGroup";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, updateFoodItems] = useState([]);
  let [newFoodItem, setNewFoodItem] = useState("");

  const handleOnChange = (event) => {
    // console.log(event.target.value);
    setNewFoodItem(event.target.value);
  };

  const handleOnKeyUp = (event) => {
    if (event.keyCode === 13) {
      const newItem = event.target.value;
      let newItems = [...foodItems, newItem];
      updateFoodItems(newItems);
      event.target.value = "";
    }
  };

  // console.log("here");

  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput
          handleOnChange={handleOnChange}
          handleOnKeyUp={handleOnKeyUp}
        />
        <ErrorMessage items={foodItems} />
        {/* <p>Food item entered by user: {newFoodItem}</p> */}
        <FoodGroup items={foodItems} />
      </Container>

      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </React.Fragment>
  );
}

export default App;
