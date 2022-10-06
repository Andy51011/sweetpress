import React from "react";
import Footer from "../components/footer/Footer";
import { ContactForm } from "../components/contact/ContactForm";
import "./Pages.css";
const Contact = () => {
  return (
    <div>
      <div className="contact__container">
        <h2 className='menu_title'> We would love to hear from you!</h2>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
