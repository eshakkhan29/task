import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ children, to }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`${to}`)}
      className="text-white bg-black  font-bold text-xl py-1 px-7 lg:text-2xl lg:py-2 lg:px-14"
    >
      {children}
    </button>
  );
};

export default Button;
