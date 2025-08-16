import React from "react";

const RightCard = ({ items }) => {
    return (
        <div className="left-card">
            <h3 className="card-title">To Buy</h3>
            <ul className="item-list">

                {items.map((item, index) => {

                    return (
                        <li
                            key={index}
                            className="item"
                        >
                            {item?.name}
                        </li>
                    );
                })}

            </ul>
        </div>
    );
};

export default RightCard;