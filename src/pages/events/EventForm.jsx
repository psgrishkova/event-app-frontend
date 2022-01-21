import React from "react";
import city from "./city.png";

const EventForm = function ({ event, handleClickSubscribe }) {
  
  return (
    <div>
      <img src={city} style={{ width: "100 %", height: "200 px" }} />
      <hr style={{ height: "10 px" }} />
      <div className="event-form-name">Название: {event.eventName}</div>
      <div className="event-form-description">Описание: {event.description}</div>
      <div className="event-form-date">Начало: {event.startDate}</div>
      <div className="event-form-date">Конец: {event.endDate}</div>
      <div className="event-form-address">Адрес: {event.address}</div>
      <div className="event-form-like-counter">Кол-во лайков: {event.likeCounter}</div>
      <div className="event-form-age-censor">Возраст: {event.ageCensor} +</div>
      <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleClickSubscribe(event.id)}
        >
          {event.subscribed ? "Отписаться" : "Подписаться"}
        </button>
    </div>
  );
};

export default EventForm;
