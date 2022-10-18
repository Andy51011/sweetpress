import React from "react";
import Footer from "../components/footer/Footer";
import MenuImage from "../images/menu.png";
import "./Pages.css";
import MenuPDF from '../menu/menu.pdf';

const Menu = () => {
  return (
    <div>
      <div className="menu_banner_container">
        <p className="menu_title">OUR DRINKS</p>
        <p className="menu_subtitle">try our winter special matcha lattes</p>
        <button className="menu_btn">
          <a className='btn__text' href={MenuPDF} download>
        Download our menu</a></button>
        <p className='file__size'>File Size: 168KB</p>
      </div>
      <div className="menu_image">
        <img src={MenuImage} width='70%' />
      </div>
      <div className="menu_banner_container">
        <p className="menu_title_opacity">OUR FOOD</p>
        <button className="menu_btn_opacity">Download our menu</button>
        <div className='coming__soon'>
        <p className='soon'>STILL IN THE WORKS</p>
        </div>
      </div>
      <div className="menu_image"></div>
      <Footer />
    </div>
  );
};

export default Menu;
