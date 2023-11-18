import React from "react";

function MenuItem({ image, name, price, desc, onOpenModal, onAddToCartClick }) {
  return (
    <div className="menuItem" onClick={onOpenModal}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p>{price} KM </p>
      <p className="description">{desc}</p>

      <button
        className="add-to-basket-button"
        onClick={(e) => {
          e.stopPropagation();
          onAddToCartClick();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
