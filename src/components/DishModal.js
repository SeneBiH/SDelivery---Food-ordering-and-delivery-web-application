import React from "react";
import "../styles/Menu.css";
const DishModal = ({ dish, onClose }) => {
  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      onClose();
    }
  };
  React.useEffect(() => {
    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  });

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={dish.image} alt={dish.name} />
        <h2>{dish.name}</h2>
        <p>Price: {dish.price} KM</p>
        <p>{dish.desc}</p>
      </div>
    </div>
  );
};

export default DishModal;
