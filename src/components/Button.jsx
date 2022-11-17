import React from "react";

const Button = ({
  type,
  text,
  iconLeft,
  iconRight,
  isFullWidth = false,
  style,
  handleClick = () => {},
}) => {
  return (
    <button
      className={type}
      style={{ minWidth: isFullWidth ? "100%" : "118px", ...style }}
      onClick={handleClick}
    >
      {iconLeft ? <img src={iconLeft} alt="" /> : null}
      {text}
      {iconRight ? (
        <img src={iconRight} alt="" style={{ marginLeft: "11px" }} />
      ) : null}
    </button>
  );
};

export default Button;
