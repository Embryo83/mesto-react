import React from "react";
import Card from "./Card";
import { api } from "../utils/api";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getUserInfo()])
      .then(([cards, data]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setInitialCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="page__content">
      <section className="profile section section_narrow">
        <div className="profile__content">
          <div className="profile__user">
            <img alt="Аватар" src={userAvatar} className="profile__avatar" />
            <button
              type="button"
              onClick={props.onEditAvatar}
              className="profile__avatar-button"
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-header">
              <h1 className="profile__title">{userName}</h1>
              <button
                type="button"
                onClick={props.onEditProfile}
                className="profile__edit-button"
              ></button>
            </div>
            <h2 className="profile__subtitle">{userDescription}</h2>
          </div>
          <button
            type="button"
            onClick={props.onAddPlace}
            className="profile__add-button"
          ></button>
        </div>
      </section>
      <section className="elements section section_narrow">
        <ul className="elements__list">
          {cards.map((card) => (
            <Card card={card} key={card._id} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;