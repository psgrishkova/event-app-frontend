import React, { useState, useEffect } from "react";
import "./MainPage.css";
import EventList from "../events/EventList";
import YandexMap from "../map/YandexMap";
import api from "../../services/api/endpoints";
import Pagination from "../Pagination";
import EventForm from "../events/EventForm";

const MainPage = function () {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState([]);
  const [placemarks, setPlacemarks] = useState([]);
  const [eventsPerPage] = useState(4);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleClickSidebar = () => {
    setOpen(!open);
  };

  const handleClickCloseSidebar = () => {
    setSelected(!selected);
  };
  

  const loadEvents = async () => {
    setLoading(true);
    await api.getEvents().then((res) => {
      setEvents([...events, ...res.data]);
      const coords = [];
      res.data.forEach((item) => {
        console.log(item.address);
        api.getPlacemarks(item.address).then((res) => {
          const result =
            res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
              .split(" ")
              .reverse();
          const coord = {
            x: parseFloat(result[1]),
            y: parseFloat(result[0]),
          };
          coords.push(coord);
          setPlacemarks([...placemarks, ...coords]);
        });
      });
    });
    setLoading(false);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvent = events.slice(firstEventIndex, lastEventIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const getEvent = (event) => {
    setEvent(event);
    setSelected(true);
  };
  return (
    <div className="main-page">
      <div className="maper">
        <YandexMap placemarks={placemarks} />
      </div>
      <div className={open ? "sidebar-1" : "closed-sidebar-1"}>
        <h1>Список событий</h1>
        <div className="event-list">
          <EventList
            events={currentEvent}
            loading={loading}
            getEvent={getEvent}
          />
          <Pagination
            eventsPerPage={eventsPerPage}
            totalEvents={events.length}
            paginate={paginate}
          />
        </div>
      </div>
      <div className={selected ? "sidebar-2" : "closed-sidebar-2"}>
      <button
        type="button"
        className="btn btn-info show"
        onClick={handleClickCloseSidebar}
      >
        Закрыть
      </button>
      <EventForm event = {event}/>
      </div>
      <button
        type="button"
        className="btn btn-info show"
        onClick={handleClickSidebar}
      >
        Жмяк
      </button>
      <button type="button" className="btn btn-info profile">
        Профиль
      </button>
      <button type="button" className="btn btn-info logout">
        Выйти
      </button>
    </div>
  );
};

export default MainPage;
