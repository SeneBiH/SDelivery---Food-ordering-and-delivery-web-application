import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../styles/Checkout.css";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

function Checkout() {
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
  const form = useRef();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = JSON.parse(queryParams.get("items"));
  const totalPrice = queryParams.get("totalPrice");

  // SEND EMAIL

  const sendEmail = () => {
    return emailjs.sendForm(
      "service_s38ms88",
      "template_69namva",
      form.current,
      "3Ap7dzsLLSmzJxPpy"
    );
  };

  const handleButtonClick = () => {
    if (form.current.checkValidity()) {
      sendEmail()
        .then((result) => {
          swal("Thank you!", "Your order is placed!", "success");
          form.current.reset();
        })
        .catch((error) => {
          swal("Oops...", "Something went wrong.", "error");
        });
    } else {
      swal("Error", "Please fill out all fields.", "error");
    }
  };

  //

  const handleBackToCart = () => {
    history.push("/menu");
  };

  return (
    <div className="checkoutBackground">
    <form className="checkoutForm" method="POST" ref={form}>
      <div className="wrapper">
        <div className="checkout">
          <h2>Checkout</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <p>Total Price: {totalPrice} KM</p>
        </div>
        <div className="container">
          <h1 className="h1">
            <i className="fas fa-shipping-fast"></i>
            Shipping Details
          </h1>
          <div className="name">
            <div>
              <label htmlFor="from_name">First</label>
              <input
                className="checkoutInput"
                type="text"
                name="from_name"
                required
              />
            </div>
            <div>
              <label htmlFor="l-name">Last</label>
              <input
                className="checkoutInput"
                type="text"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="street">
            <label htmlFor="street">Street</label>
            <input
              className="checkoutInput"
              type="text"
              name="address"
              required
            />
          </div>
          <div className="address-info">
            <div>
              <label htmlFor="city">City</label>
              <input
                className="checkoutInput"
                type="text"
                name="city"
                required
              />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input
                className="checkoutInput"
                type="text"
                name="state"
                required
              />
            </div>
            <div>
              <label htmlFor="zip">Zip</label>
              <input
                className="checkoutInput"
                type="text"
                name="zip"
                required
              />
            </div>
          </div>
          <div className="street">
            <label htmlFor="from_email">E-mail</label>
            <input
              className="checkoutInput"
              type="email"
              name="from_email"
              required
            />
          </div>
          <h1 className="h1">
            <i className="far fa-credit-card"></i> Payment Information
          </h1>
          <div className="cc-num">
            <label htmlFor="card-num">Credit Card No.</label>
            <input
              className="checkoutInput"
              type="text"
              name="cardNumber"
              required
            />
          </div>
          <div className="cc-info">
            <div>
              <label htmlFor="expire">Exp</label>
              <input
                className="checkoutInput"
                type="text"
                name="expire"
                required
              />
            </div>
            <div>
              <label htmlFor="security">CCV</label>
              <input
                className="checkoutInput"
                type="text"
                name="security"
                required
              />
            </div>
          </div>
          <div className="btns">
            <button
              className="button1"
              type="button"
              onClick={handleButtonClick}
            >
              Purchase
            </button>
            <button className="button2" onClick={handleBackToCart}>
              Back to cart
            </button>
          </div>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Checkout;
