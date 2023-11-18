import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import DishModal from "../components/DishModal";
import "../styles/Menu.css";
import Cart from "../components/Cart";

function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedDish, setSelectedDish] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantities, setCartQuantities] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const openModal = (dish) => {
    setSelectedDish(dish);
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  const [quantities, setQuantities] = useState({});

  const clearCart = () => {
    setCartItems([]);
    setCartQuantities({});
    setTotalPrice(0);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[itemIndex] = item;
      setCartItems(updatedCart);

      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.name]: (prevQuantities[item.name] || 0) + 1,
      }));
    } else {
      setCartItems([...cartItems, item]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.name]: 1,
      }));
    }

    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price);
  };

  const removeFromCart = (item) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (itemIndex !== -1) {
      if (quantities[item.name] === 1) {
        updatedCart.splice(itemIndex, 1);
        delete quantities[item.name];
      } else {
        quantities[item.name] -= 1;
      }

      setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price);

      setCartItems(updatedCart);
    }
  };

  return (
    <div className="menu">
      <h1 className="menuTitle" style={{ marginTop: "100px" }}>
         - MENU -
      </h1>
      <div className={`menuList ${isCartOpen ? "shift-left" : ""}`}>
        {MenuList.map((menuItem, key) => {
          return (
            <div key={key}>
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                desc={menuItem.desc}
                onOpenModal={() => openModal(menuItem)}
                onAddToCartClick={() => {
                  addToCart(menuItem);
                  openCart();
                }}
              />
            </div>
          );
        })}
      </div>

      {selectedDish && <DishModal dish={selectedDish} onClose={closeModal} />}
      <button className="cartButton" onClick={openCart}>Open Cart</button>
      <Cart
        isOpen={isCartOpen}
        closeCart={closeCart}
        items={cartItems}
        quantities={quantities}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      />
    </div>
  );
}

export default Menu;
