import React from "react";

const RightCard = ({ items, handleCompletedSelectedItems, selectedCompletedItems }) => {
    return (

        <section className="toBuyCardContainer">
            <div className="left-card">
                <h3 className="card-title">Completed</h3>
                <ul className="item-list">

                    {items.map((item, index) => {
                        const isItemPresent = selectedCompletedItems?.some((selectedItem) => {
                            return selectedItem?.id === item?.id
                        })

                        return (
                            <li
                                key={index}
                                className="item"
                                onClick={() => {
                                    handleCompletedSelectedItems(item)
                                }}

                                style={{
                                    background: `${isItemPresent ? "red" : ""}`
                                }}
                            >
                                {item?.name}
                            </li>
                        );
                    })}

                </ul>
            </div>
        </section>
    );
};

export default RightCard;