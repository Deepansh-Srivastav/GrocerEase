import AddItemForm from "./AddItemForm.jsx"
import { Chip } from "@mui/material";

const LeftCard = ({ items, handleSelectedItems, selectedPendingItems, setPendingItems }) => {
  return (
    <section className="toBuyCardContainer">
      <div className="left-card">
        <div className="card-header">
          <h3 className="card-title">Shopping List</h3>
          <div className="item-count">
            {items?.length || 0} {items?.length === 1 ? 'item' : 'items'}
          </div>
        </div>

        <div className="item-list-container">

          {items?.length > 0 ? (
            <ul className="item-list">
              {items.map((item, index) => {
                const isItemSelected = selectedPendingItems?.some(
                  (selectedItem) => selectedItem?.id === item?.id
                )
                return (
                  <li
                    key={item?.id || index}
                    className={`item ${isItemSelected ? 'item-selected' : ''}`}
                    onClick={() => handleSelectedItems(item)}
                    role="button"
                    tabIndex={0}
                    aria-pressed={isItemSelected}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        handleSelectedItems(item)
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
                      <Chip
                        label={item?.quantity}
                        sx={{
                          minWidth: "28px",
                          height: "24px",
                          borderRadius: "9999px",
                          background: "#588352ff",
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                          "& .MuiChip-label": {
                            px: 1.5,
                          },
                        }}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <p className="empty-message">No items in your list yet</p>
              <p className="empty-subtext">Add your first item below</p>
            </div>
          )}
        </div>
      </div>

      <AddItemForm setPendingItems={setPendingItems} />
    </section>
  );
};

export default LeftCard;