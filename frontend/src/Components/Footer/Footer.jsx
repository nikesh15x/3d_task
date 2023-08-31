import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer items-center p-4 bg-gray-400 text-neutral-content pt-9">
      <div className="items-center grid-flow-col justify-start">
        <img src="header.png " className="" alt=""  />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="">
        <p className="font-semibold text-black">Use Full Links</p>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/login">Login</Link>
      </div>
    </footer>
  );
}

export default Footer;
