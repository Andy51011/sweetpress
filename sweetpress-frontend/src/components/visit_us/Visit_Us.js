import React from "react";
import Partners from "../../json/partners.json";
import "./Visit_Us.css";

const Visit_Us = () => {
  return (
    <div className="visit_container">
      <div className="visit_title">
        <h3>visit us at these locations</h3>
      </div>
      <div className="visit_content">
        {Partners.map((partners) => {
          console.log(partners.title);
          return (
            <div className="card_container">
              <div className="visit_cards" key={partners.id}>
                {partners.name}
                <p>Address: {partners.address} </p>
                {partners.image_url !== null &&
                partners.image_url ==
                  "https://tse1.mm.bing.net/th?id=OIP.BMrTqkXpVxQDIpcFfdfryAHaC4&pid=Api&P=0" ? (
                  <img src={partners.image_url} width="250px" height="100px" />
                ) : (
                  <img src={partners.image_url} width="200px" height="200px" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Visit_Us;
