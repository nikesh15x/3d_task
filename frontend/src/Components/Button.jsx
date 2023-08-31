import React from "react";

function Button({ title, styles, func }) {
  let style = `btn bg-orange-400 rounded-2xl hover:dark:bg-orange-500 ${styles}`;
  return (
    <button onClick={func} className={style}>
      {title}
    </button>
  );
}

export default Button;
