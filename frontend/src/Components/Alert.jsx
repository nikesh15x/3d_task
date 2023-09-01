import React, { useState, useEffect } from "react";

function Alert({ type, message, hide, setHideErr }) {
  const [style, setStyle] = useState("hidden");

  useEffect(() => {
    console.log(type, message, hide, "sad");
    if (hide) {
      setStyle("hidden");
    } else {
      setStyle(`alert alert-${type}`);
    }
  }, []);

  const err = () => {
    return (
      <svg
        onClick={handleClose}
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };

  const succs = () => {
    return (
      <svg
        onClick={handleClose}
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current shrink-0 h-6 w-6 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  };

  const handleClose = () => {
    setHideErr();
    setStyle("hidden");
  };

  return (
    <div className={style}>
      {type == "success" ? succs() : err()}
      <span>{message}</span>
    </div>
  );
}

export default Alert;
