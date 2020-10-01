import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img
        src={props.card.link}
        className="element__item"
        alt={props.card.name}
        onClick={handleClick}
      />
      <button type="button" className="element__delete-button"></button>
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__like-button"></button>
          <span className="element__like-counter">0</span>
        </div>
      </div>
    </li>
  );
}

export default Card;