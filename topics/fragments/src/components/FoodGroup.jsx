import { useState } from "react";
import FoodItem from "./FoodItem";
import PropTypes from "prop-types";

function FoodGroup({ items }) {
  const handleBuyButtonClicked = (event, item) => {
    // console.log(event);
    console.log(`${item} is being bought`);
    const newBoughtItems = boughtItems.includes(item)
      ? boughtItems.filter((i) => i !== item)
      : [...boughtItems, item];
    setBoughtItems(newBoughtItems);
    // console.log(event);
    // event.target.classList.add("sold");
  };

  let [boughtItems, setBoughtItems] = useState([]);

  return (
    <>
      {items && items.length > 0 && (
        <ul className="list-group">
          {items.map((item) => (
            <FoodItem
              key={item}
              name={item}
              bought={boughtItems.includes(item)}
              handleBuyButtonClick={(event) =>
                handleBuyButtonClicked(event, item)
              }
            />
          ))}
        </ul>
      )}
    </>
  );
}

FoodGroup.propTypes = {
  items: PropTypes.array.isRequired,
};

export default FoodGroup;
