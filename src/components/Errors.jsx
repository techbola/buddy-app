import React from "react";

const Errors = ({ errors }) => {
  return (
    <ul className="errors">
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </ul>
  );
};

export default Errors;
