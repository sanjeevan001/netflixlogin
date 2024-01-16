import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionblack = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionblack);

    return () => window.removeEventListener("scroll", transitionblack);
  }, []);

  return (
    <div className="nav">
      <div className="nav-content">
        <Link to="/">
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
            className="nav-logo"
          />
        </Link>
        <Link to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="nav-avatar"
          />
        </Link>
      </div>
    </div>
  );
}

export default Nav;
