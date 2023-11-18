import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from '../assets/roze.png';
import { Link } from "react-router-dom";
import { NavItems } from "./NavItems";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const closeMenu = () => {
    setClicked(false);
  };

  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <a className="unstyled-link" href="/">
            <img src={logo} alt=""></img>
          </a>
        </h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {NavItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.path} onClick={closeMenu}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}

        {currentUser && (
          <Link className="nav-links" to="/my-profile" onClick={closeMenu}>
            <i className="fa-solid fa-user"></i>My Profile
          </Link>
        )}

        <li className="nav-links">
          {currentUser ? (
            <button className="nav-link" onClick={logout}>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out
            </button>
          ) : (
            <Link className="nav-link" to="/signup" onClick={closeMenu}>
              <i className="fa-solid fa-right-to-bracket"></i>Sign Up
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
