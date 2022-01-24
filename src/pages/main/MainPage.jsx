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
  const [searchText, setSearchText] = useState("");

  const handleClickSidebar = () => {
    setOpen(!open);
    setSelected(false);
  };

  const handleClickCloseSidebar = () => {
    setSelected(!selected);
  };

  const loadEvents = async () => {
    const result = await api.getEvents();
    setEvents(result.data);
    return result.data;
  };

  const loadSubscriptions = async (data) => {
    const result = await api.getSubscriptions();
    setSubscriptions(result.data);
    const array = data;
    array.forEach((item) => (item.subscribed = false));
    for (let i = 0; i < result.data.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (result.data[i].id == array[j].id) {
          array[j].subscribed = true;
        }
      }
    }
    setEvents(array);
  };

  const drawPlacemarks = async (data) => {
    const coords = [];
    data.forEach(async (item) => {
      const result = await api.getPlacemarks(item.address);
      const temp =
        await result.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(" ")
          .reverse();
      const coord = {
        id: item.id,
        address: item.address,
        x: parseFloat(temp[0]),
        y: parseFloat(temp[1]),
      };
      coords.push(coord);
    });
    console.log(coords);
    return coords;
  };

  const handleClickSubscribe = async (event) => {
    if (event.subscribed) {
      event.likeCounter--;
      await api.unsubscribe(event.id);
    } else {
      event.likeCounter++;
      await api.subscribe(event.id);
    }
    event.subscribed = !event.subscribed;
    const result = await api.getReviews(event.id);
    event.reviews = result.data;
    setEvent(event);
    setSelected(false);
    setSelected(true);
  };

  const handleChangeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const getEvent = async (event) => {
    const result = await api.getReviews(event.id);
    event.reviews = result.data;
    setEvent(event);
    setOpen(true);
    setSelected(true);
  };

  const handleClickAddReview = async (event, review) => {
    await api.addReview(event.id, review);
    const result = await api.getReviews(event.id);
    event.reviews = result.data;
    setEvent(event);
    setSelected(false);
    setSelected(true);
  };

  const getEventByAddress = (address) => {
    if (
      events.filter((element) => {
        return element.address == address;
      }).length > 1
    ) {
      setSearchText(address);
      setSelected(false);
      setOpen(true);
    } else {
      getEvent(events.find((element) => element.address == address));
    }
  };



  const getFilterData = () => {
    if (!searchText) {
      return events;
    }
    return events.filter((item) => {
      return item["address"].includes(searchText);
    });
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filtredEvents = getFilterData();
  const lastEventIndex = currentPage * eventsPerPage;
  const firstEventIndex = lastEventIndex - eventsPerPage;
  const currentEvent = filtredEvents.slice(firstEventIndex, lastEventIndex);

  useEffect(async () => {
    const array = await loadEvents();
    await loadSubscriptions(array);
    const placemarks = await drawPlacemarks(array);
    setPlacemarks(placemarks);
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="main-page">
          <div>
            <div className="map">
            <YandexMap
              placemarks={placemarks}
              getEventByAddress={getEventByAddress}
            />
            </div>
            <div className={open ? "sidebar-1" : "closed-sidebar-1"}>
              <div className="input-group">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Поиск событий по адресу"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={searchText}
                  onChange={(e) => handleChangeSearchText(e)}
                />
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={getFilterData}
                >
                  Поиск
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
                  totalEvents={filtredEvents.length}
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
              <div className="event-form">
                <EventForm
                  event={event}
                  handleClickSubscribe={handleClickSubscribe}
                  handleClickAddReview={handleClickAddReview}
                />
              </div>
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
        </div>
      )}
    </div>
  );
};

export default MainPage;
