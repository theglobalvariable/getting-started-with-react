import PropTypes from "prop-types";

function ErrorMessage({ items }) {
  return <>{(!items || !items.length) && <h3>I am still hungry</h3>}</>;
}

ErrorMessage.propTypes = {
  items: PropTypes.array,
};

export default ErrorMessage;
