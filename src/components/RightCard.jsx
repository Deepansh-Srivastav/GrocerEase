import React from "react";

const RightCard = ({ items, handleCompletedSelectedItems, selectedCompletedItems }) => {
    return (
        <section className="toBuyCardContainer">
            <div className="left-card">
                <div className="card-header">
                    <h3 className="card-title">Completed</h3>
                    <div className="item-count">
                        {items?.length || 0} {items?.length === 1 ? 'item' : 'items'}
                    </div>
                </div>

                <div className="item-list-container">
                    {items?.length > 0 ? (
                        <ul className="item-list">
                            {items.map((item, index) => {
                                const isItemSelected = selectedCompletedItems?.some(
                                    (selectedItem) => selectedItem?.id === item?.id
                                )

                                return (
                                    <li
                                        key={item?.id || index}
                                        className={`item-completed ${isItemSelected ? 'item-selected' : ''}`}
                                        onClick={() => handleCompletedSelectedItems(item)}
                                        role="button"
                                        tabIndex={0}
                                        aria-pressed={isItemSelected}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault()
                                                handleCompletedSelectedItems(item)
                                            }
                                        }}
                                    >
                                        <div className="item-content">
                                            <span className="item-name">{item?.name}</span>
                                            {isItemSelected && (
                                                <div className="selection-indicator">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">✅</div>
                            <p className="empty-message">No completed items yet</p>
                            <p className="empty-subtext">Items will appear here when completed</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default RightCard;