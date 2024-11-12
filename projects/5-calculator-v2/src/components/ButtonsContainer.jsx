import styles from "./ButtonsContainer.module.css";
import PropTypes from "prop-types";

export default function ButtonsContainer({ onButtonClickHandler }) {
  const buttonNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "C",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
    "<=",
  ];
  return (
    <div className={styles["buttons-container"]}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.button}
          onClick={() => onButtonClickHandler(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
}

ButtonsContainer.propTypes = {
  onButtonClickHandler: PropTypes.func,
};
