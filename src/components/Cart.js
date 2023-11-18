import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Cart.css";

function Cart({
  isOpen,
  closeCart,
  items,
  quantities,
  totalPrice,
  removeFromCart,
  clearCart,
}) {
  const isCartEmpty = items.length === 0;
  const history = useHistory();

  const goToCheckout = () => {
    const itemsWithQuantities = items.map((item) => ({
      ...item,
      quantity: quantities[item.name] || 0,
    }));

    const itemsJSON = JSON.stringify(itemsWithQuantities);

    history.push(
      `/checkout?items=${encodeURIComponent(
        itemsJSON
      )}&totalPrice=${totalPrice}`
    );
  };
  return (
    <div className={`cart ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <h2 className="carth1">Cart</h2>
        {isCartEmpty ? (
          <p className="cartp1">Your cart is empty.</p>
        ) : (
          <>
            <ul className="qtycenter">
              {items.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {quantities[item.name]}
                  <button className="bn53" onClick={() => removeFromCart(item)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <p className="centerp">Total Price: {totalPrice} KM</p>
          </>
        )}
        <div className="checkoutdiv">
          {!isCartEmpty && (
            <button onClick={goToCheckout} className="bn632-hover bn26">
              Go to Checkout
            </button>
          )}
        </div>
        <div className="clearclosebuttons">
          <button onClick={clearCart} className="bn632-hover bn27">
            Clear Cart
          </button>
          <button onClick={closeCart} className="bn632-hover bn28">
            Close Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
