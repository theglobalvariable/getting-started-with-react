import PropTypes from "prop-types";
import styles from "./FoodItem.module.css";
// import { useState } from "react";

function FoodItem({ name, bought, handleBuyButtonClick }) {
  // name = name + "__";

  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${name} is being bought`);
  // };

  // let [sold, setSold] = useState(false);
  let sold = false;
  return (
    <>
      <li
        className={`list-group-item ${styles["my-item"]} ${
          (sold || bought) && "active"
        }`}
      >
        <span className={styles["my-span"]}>{name}</span> is a healthy food
        <button
          className={`btn btn-info ${styles.button}`}
          onClick={(event) => {
            // setSold(!sold);
            handleBuyButtonClick(event);
          }}
        >
          {sold || bought ? "Skip" : "Buy"}
        </button>
      </li>
    </>
  );
}

FoodItem.propTypes = {
  name: PropTypes.string.isRequired,
  bought: PropTypes.bool.isRequired,
  handleBuyButtonClick: PropTypes.func,
};

export default FoodItem;
