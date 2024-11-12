import styles from "./Container.module.css";

import PropTypes from "prop-types";
export default function Container(props) {
  return <div className={styles.container}>{props.children}</div>;
}

Container.propTypes = {
  children: PropTypes.any,
};
