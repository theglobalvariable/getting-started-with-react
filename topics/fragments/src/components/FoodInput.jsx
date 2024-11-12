import PropTypes from "prop-types";
import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange, handleOnKeyUp }) => {
  return (
    <input
      type="text"
      className={styles.input}
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
    />
  );
};

FoodInput.propTypes = {
  handleOnChange: PropTypes.func,
  handleOnKeyUp: PropTypes.func,
};

export default FoodInput;
