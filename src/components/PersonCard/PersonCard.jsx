import faker from "faker";
import React, { useEffect } from "react";
import style from "./PersonCard.module.scss";

const PersonCard = ({ image, alt }) => {
  useEffect(() => {}, [image]);

  return (
    <div className={style["person-card"]}>
      <div className={style["tabs"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <img src={image} alt={alt || image} />
      </div>
      <div className={style["info-action"]}>
        <p>
          {faker.name.firstName()},{" "}
          {faker.datatype.number({
            min: 22,
            max: 28,
          })}
        </p>
        <p>
          <i className="fas fa-map-marker-alt"></i> {faker.address.city()}, {faker.address.country()}
        </p>

        <div className={style.actions}>
          <button className={style["like-btn"]}>
            <i className="fas fa-heart"></i>
          </button>
          <button className={style["dislike-btn"]}>
            <i className="fas fa-thumbs-down"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
