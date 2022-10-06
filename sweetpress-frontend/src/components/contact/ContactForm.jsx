import React from "react";
import axios from "axios";
import "./ContactForm.css";

export const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "access key here");

    //convert to obj
    const object = Object.fromEntries(formData);

    //
    const json = JSON.stringify(object);

    const res = await axios
      .post("https://api.web3forms.com/submit", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
      .then((res) => res.json());
    //TODO: modal pop up for success sent?
    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
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
  );
};
