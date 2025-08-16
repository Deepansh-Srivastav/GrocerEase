import React from "react";

const LeftCard = ({ items, handleSelectedItems, selectedPendingItems }) => {
  return (
    <div className="left-card">
      <h3 className="card-title">To Buy</h3>
      <ul className="item-list">

        {items.map((item, index) => {
          const isItemPresent = selectedPendingItems?.some(
            (selectedItem) => {
              return selectedItem?.id === item?.id
            }
          )

          return (
            <li
              key={index}
              className="item"
              onClick={() => handleSelectedItems(item)}
              style={{
                background: isItemPresent ? "red" : "",
              }}
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