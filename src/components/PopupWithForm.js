import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_is-open" : ""
      }`}
      onClick={props.onClose}
    >
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form action="#" name={props.name} className="popup__form" noValidate>
          {props.children}
          <button type="submit" className="popup__submit-button" disabled>
            Сохранить
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;