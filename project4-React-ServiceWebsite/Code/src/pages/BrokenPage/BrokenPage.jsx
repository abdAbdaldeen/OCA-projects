import React from "react";
import "./BrokenPage.css";
import { Link } from "react-router-dom";
import brokenpage from "../../img/brokenpage.png";

function BrokenPage() {
  return (
    <div className="BrokenPage">
      <img className="BrokenPageImg" src={brokenpage} alt="BrokenPage" />
      <div>
        <h1 className="BrokenPageH">Login Restriction</h1> <br />
        <h2 className="BrokenPageH">
          Please <Link to="/login">login or register</Link> to access this page
        </h2>
      </div>
    </div>
  );
}

export default BrokenPage;
