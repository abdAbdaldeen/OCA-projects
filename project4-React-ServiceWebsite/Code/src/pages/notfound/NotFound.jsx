import React from "react";
import "./NotFound.css";
import notfound from "../../img/notfound.png";

function NotFound() {
  return (
    <div className="NotFoundPage">
      <img
        className="NotFoundPageImg"
        src={notfound}
        alt="404 Error, Page not Found"
      />
      <div>
        <h1 className="NotFoundPageH">404</h1> <br />
        <h2 className="NotFoundPageH">Page Not Found</h2>
      </div>
    </div>
  );
}

export default NotFound;
