import React from "react";

const LeftCard = ({ items, handleSelectedItems, selectedPendingItems }) => {
  return (
    <div className="left-card">
      <h3 className="card-title">To Buy</h3>
      <ul className="item-list">

        {items.map((item, index) => {
          const isItemSelected = selectedPendingItems?.some(
            (selectedItem) => selectedItem?.id === item?.id
          );
          return (
            <li
              key={index}
              className="item"
              style={{
                background: isItemSelected ? "red" : "",
              }}
              onClick={() => handleSelectedItems(item)}
            >
              {item?.name}
            </li>
          );
        })}

      </ul>
    </div>
  );
};

export default LeftCard;