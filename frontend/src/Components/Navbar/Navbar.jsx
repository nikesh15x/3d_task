import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const path = useLocation().pathname;
  console.log(path);
  const navLinks = (isMobileView) => {
    return (
      <ul
        className={
          isMobileView
            ? "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            : "menu menu-horizontal px-1 justify-center items-center"
        }
      >
        <li>
          <Link
            to="/"
            className={
              path === "/" ? "text-orange-500 hover:text-orange-700 " : null
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className={path === "/menu" ? "text-orange-500" : null}
          >
            Menu
          </Link>
        </li>
        <li>
          <div className="indicator scale-90">
            <span className="indicator-item badge bg-orange-500 scale-75">
              99+
            </span>
            {isMobileView ? (
              <h3>You Cart</h3>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            )}
          </div>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {navLinks(true)}
          </div>
          <Link to="/">
            <img src="header.png" className="scale-90"></img>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">{navLinks(false)}</div>
        <div className="navbar-end items-center">
          <Link to="/login">
            <button className="btn btn-sm bg-orange-400 rounded-2xl hover:dark:bg-orange-500">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
