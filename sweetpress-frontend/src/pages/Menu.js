import React from "react";
import Footer from "../components/footer/Footer";
import MenuImage from "../images/menu.png";
import "./Pages.css";

const Menu = () => {
  return (
    <div>
      <div className="menu_banner_container">
        <p className="menu_title">OUR DRINKS</p>
        <p className="menu_subtitle">try our winter special matcha lattes</p>
        <button className="menu_btn">Download our menu</button>
      </div>
      <div className="menu_image"></div>
      <div className="menu_banner_container">
        <p className="menu_title">OUR FOOD</p>
        <p className="menu_subtitle">try our seasonal sweets</p>
        <button className="menu_btn">Download our menu</button>
      </div>
      <div className="menu_image"></div>

      <Footer />
    </div>
  );
};

export default Menu;
