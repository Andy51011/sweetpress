import React from "react";
import axios from "axios";
import "./ContactForm.css";
// import { CONTACT_API_KEY } from "./ContactApiKey";
import KimDrinks from "../../images/kim_drinks.jpeg";

export const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // formData.append("access_key", CONTACT_API_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    await axios
      .post("https://api.web3forms.com/submit", json, axiosConfig)
      .then((res) => {
        console.log("Successfully submitted:", res);
      })
      .catch((err) => {
        console.log("Error occurred while submitting form: ", err);
      });
  };

  return (
    <div className="contact__container">
      <div className="img__positioning">
        <img src={KimDrinks} width="300" height="400" />

        <form onSubmit={onSubmit}>
          <div className="contact__title">
            <div className="title__contact">Contact Us</div>
            <div className="title__msg">We will get back to you asap!</div>
          </div>
          <div className="contact__info">
            <div className="contact__name">
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className="contact__email">
              <label>Email</label>
              <input type="email" name="email" />
            </div>
          </div>
          <div className="contact__message">
            <label>Message</label>
            <textarea name="message"></textarea>
          </div>
          <button className="contact__submit" type="submit">
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};
