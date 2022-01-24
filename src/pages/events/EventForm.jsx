import React, { useState } from "react";
import city from "./city.png";
import "./EventForm.css";
const EventForm = function ({
  event,
  handleClickSubscribe,
  handleClickAddReview,
}) {
  const [review, setReview] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const onChangeReview = (e) => {
    setReview(e.target.value);
  };

  return (
    <div>
      <img src={city} style={{ width: "100 %", height: "200 px" }} />
      <hr style={{ height: "10 px" }} />
      <div className="event-form-name">Название: {event.eventName}</div>
      <div className="event-form-description">
        Описание: {event.description}
      </div>
      <div className="event-form-date">Начало: {event.startDate}</div>
      <div className="event-form-date">Конец: {event.endDate}</div>
      <div className="event-form-address">Адрес: {event.address}</div>
      <div className="event-form-like-counter">
        Кол-во идущих людей: {event.likeCounter}
      </div>
      <div className="event-form-age-censor">
        Возраст: {event.ageCensor} + {event.subscribed}
      </div>
      {user.role == "USER_DEFAULT" ?  
      <div className="event-form-sub-like">
        <button
          type="button"
          className="btn btn-primary"
          onClick={async () => handleClickSubscribe(event)}
        >
          {event.subscribed ? "Отписаться" : "Подписаться"}
        </button>
      </div> : <></>}
      <div className="event-form-review"></div>
      {user.role == "USER_DEFAULT" && event.subscribed ? (
        <div>
          <textarea
            class="form-control"
            value={review}
            onChange={onChangeReview}
          ></textarea>
          <button
            type="button"
            className="btn btn-primary"
            onClick={async () => handleClickAddReview(event, review)}
          >
            Отзыв оставить
          </button>{" "}
        </div>
      ) : (
        <></>
      )}
      <div className="reviews">
        <ul>
          {event.reviews?.map((item) => (
            <li>
              <div className="review">
                <div>
                  <strong>{item.username}: </strong>
                </div>
                <div>
                  <span>{item.review}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventForm;
