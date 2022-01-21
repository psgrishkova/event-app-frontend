import React, { useState, useEffect } from "react";
import "./MainPage.css";
import EventList from "../events/EventList";
import YandexMap from "../map/YandexMap";
import api from "../../newApi/endpoints/endpoints";
import Pagination from "../Pagination";
import EventForm from "../events/EventForm";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = function () {
  const [events, setEvents] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [event, setEvent] = useState([]);
  const [placemarks, setPlacemarks] = useState([]);
  const [eventsPerPage] = useState(4);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleClickSidebar = () => {
    setOpen(!open);
    setSelected(false);
  };

  const handleClickCloseSidebar = () => {
    setSelected(!selected);
  };

  const loadEvents = async () => {
    setLoading(true);
    await api.getEvents().then((res) => {
      res.data.forEach(x => x["subscribed"] = false);
      console.log(res.data);
      setEvents(res.data);
      const coords = [];
      res.data.forEach((item) => {
        api.getPlacemarks(item.address).then((res) => {
          const result =
            res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
              .split(" ")
              .reverse();
          const coord = {
            id: item.id,
            x: parseFloat(result[1]),
            y: parseFloat(result[0]),
          };
          console.log(coord);
          coords.push(coord);
          setPlacemarks(coords);
        });
      });
    });
    setLoading(false);
  };

  const loadSubscriptions = async () => {
    await api.getSubscriptions().then((res) => {
      setSubscriptions(res.data);
    });
  };

  const handleClickSubscribe = async (eventId) => {
    if (events[eventId].subscribed) {
      events[eventId].subscribed = false;
      await api.unsubscribe(eventId);
      setEvents(events);
    }
    else {
      await api.subscribe(eventId);
      events[eventId].subscribed = true;
      setEvents(events);
    }
  };

  const setSubscribed = () => {
    const array = [];
    let index = 0;
    events.forEach(item => {
    if(subscriptions.find(x => x.id === item.id)) {
      array[index++] = item;
      array[index]["subscribed"] = true;
    }
    else {
      array[index++] = item;
      array[index]["subscribed"] = false;      
    }
  })
    console.log(array);
    setEvents(array);
  };

  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvent = events.slice(firstEventIndex, lastEventIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getEvent = (event) => {
    setEvent(event);
    setSelected(true);
  };

  const getEventById = (id) => {
    getEvent(events.find((element) => element.id == id));
  };

  useEffect(() => {
    loadEvents();
    loadSubscriptions();
    setSubscribed();
  }, []);

  return (
    <div className="main-page">
      <div className="maper">
        <YandexMap
          placemarks={placemarks}
          loading={loading}
          getEventById={getEventById}
        />
      </div>
      <div className={open ? "sidebar-1" : "closed-sidebar-1"}>
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
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
          className="btn-close show"
          onClick={handleClickCloseSidebar}
        ></button>
        <EventForm event={event} handleClickSubscribe={handleClickSubscribe} />
      </div>
      <button
        type="button"
        className={
          open
            ? "btn btn-info show-sidebar-clicked"
            : "btn btn-info show-sidebar"
        }
        onClick={handleClickSidebar}
      >
        Жмяк
      </button>
    </div>
  );
};

export default MainPage;
