import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import logo from "./../../img/cover.png";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default function Header() {
  const [isLogIn, setIsLogIn] = useState(true);
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            // width="60"
            height="60"
            className="d-inline-block "
            alt="logo"
          />
        </Navbar.Brand>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {isLogIn ? (
              <>
                <li className="nav-item">Services</li>
                <li className="nav-item">Profile</li>
                <li className="nav-item">Logout</li>
              </>
            ) : (
              <li className="nav-item">Log in / Register</li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

/*
add to index.html

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
 
*/
