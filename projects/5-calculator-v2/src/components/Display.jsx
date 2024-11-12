import PropTypes from "prop-types";
import styles from "./Display.module.css";

export default function Display({ result }) {
  return (
    <input type="text" id="display" className={styles.display} value={result} readOnly />
  );
}

Display.propTypes = { result: PropTypes.any.isRequired };
