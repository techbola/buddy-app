import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotAuthenticated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return <div>NotAuthenticated</div>;
};

export default NotAuthenticated;
