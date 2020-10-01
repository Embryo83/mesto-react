import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setIsImagePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          autoComplete="off"
          id="avatar-input"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          className="popup__input popup__input_type_ava"
          required
        />
        <span id="avatar-input-error" className="popup__error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          autoComplete="off"
          id="name-input"
          type="text"
          name="name"
          placeholder = "Имя"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-input-error" className="popup__error"></span>
        <input
          type="text"
          name="job"
          placeholder="О себе"
          className="popup__input popup__input_type_job"
          id="job-input"
          minLength="2"
          maxLength="200"
          autoComplete="off"
          required
        />
        <span className="popup__error" id="job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="place"
          placeholder="Название"
          className="popup__input popup__input_type_place"
          id="place-input"
          minLength="1"
          maxLength="30"
          autoComplete="off"
          required
        />

        <span className="popup__error" id="place-input-error"></span>
        <input
          type="url"
          name="link"
          placeholder="Cсылка на картинку"
          className="popup__input popup__input_type_link"
          id="url-input"
          autoComplete="off"
          required
        />
        <span className="popup__error" id="url-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;