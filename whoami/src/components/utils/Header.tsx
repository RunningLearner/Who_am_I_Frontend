import React from "react";
import header_image from "@img/header_image.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const onClickHeader = () => {
    navigate("/");
  };
  return (
    <div className="header--wrapper">
      <p className="header--title" onClick={onClickHeader}>
        my portfolio
      </p>
    </div>
  );
}

export default Header;
