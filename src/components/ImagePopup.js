import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_photo ${
        props.card.state ? "popup_is-open" : ""
      }`}
      onClick={props.onClose}
    >
      <figure className="popup__container_type_photo">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <img
          src={props.card.src}
          alt={props.card.name}
          className="popup__photo"
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;