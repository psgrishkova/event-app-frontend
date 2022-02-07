import React, {useState, useEffect} from "react";
import EventList from "../EventPage/EventList";
import YandexMap from "../Map";
import api from "../../service/endpoints/endpoints";
import Pagination from "../Pagination";
import EventForm from "../EventPage/EventForm";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = function () {
    const [events, setEvents] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const [points, setPoints] = useState([]);
    const [event, setEvent] = useState({});
    const [eventsPerPage] = useState(4);
    const [open, setOpen] = useState(false);
    const [showEvent, setShowEvent] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [eventNameText, setEventNameText] = useState("");
    const [addressText, setAddressText] = useState("");


    const handleClickSidebar = () => {
        setOpen(!open);
        setShowEvent(false);
    };

    const handleClickCloseSidebar = () => {
        setShowEvent(!showEvent);
    };

    const handleChangeSearchText = (e) => {
        setEventNameText(e.target.value);
    };

    const handleChangeAddressText = (e) => {
        setAddressText(e.target.value);
    };

    const loadEventsByDescription = async () => {
        const result = await api.getEventsByName(eventNameText);
        setEvents(result.data);
        return result.data;
    };

    const loadSubscriptions = async () => {
        const result = await api.getSubscriptions();
        setSubscriptions(result.data);
        return result.data;
    };

    const setPropertiesSubscribed = (events, subscriptions) => {
        const result = events;
        result.forEach((item) => (item.subscribed = false));
        for (let i = 0; i < subscriptions.length; i++) {
            for (let j = 0; j < result.length; j++) {
                if (subscriptions[i].id == result[j].id) {
                    result[j].subscribed = true;
                }
            }
        }
        return result;
    };

    const drawPoints = async (events) => {
        const result = [];
        for (const item of events) {
            const index = result.findIndex(i => i.address === item.address);
            if (index != -1) {
                result[index].count++;
            } else {
                let temp = await api.getPoint(item.address);
                temp = temp.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
                    .split(" ")
                    .reverse();
                const point = {
                    id: item.id,
                    count: 1,
                    address: item.address,
                    x: parseFloat(temp[0]),
                    y: parseFloat(temp[1]),
                };
                result.push(point);
            }
        }
        return result;
    };

    const handleClickSubscribe = async (event) => {
        const newEvents = events;
        const newEvent = {};
        Object.assign(newEvent, event);
        if (newEvent.subscribed) {
            newEvent.likeCounter--;
            await api.unsubscribe(newEvent.id);
        } else {
            newEvent.likeCounter++;
            await api.subscribe(newEvent.id);
        }
        newEvent.reviews = await getReviewsById(event.id);
        newEvent.subscribed = !newEvent.subscribed;
        setEvent(newEvent);
        const index = newEvents.findIndex(item => item.id === newEvent.id);
        newEvents[index] = newEvent;
        setEvents(newEvents);
    };

    const getEvent = async (event) => {
        const result = await api.getReviews(event.id);
        event.reviews = result.data.length != 0 ? result.data : null;
        setEvent(event);
        setOpen(true);
        setShowEvent(true);
    };

    const handleClickAddReview = async (event, review) => {
        const newEvent = {};
        Object.assign(newEvent, event);
        await api.addReview(newEvent.id, review);
        newEvent.reviews = await getReviewsById(event.id);
        setEvent(newEvent);
    };

    const getReviewsById = async (id) => {
        const result = await api.getReviews(id);
        return result.data;
    };

    const getEventByAddress = async (address) => {
        const result = events.filter((item) => {
            return item.address === address;
        })
        if (
            result.length > 1
        ) {
            setAddressText(address);
            setShowEvent(false);
            setOpen(true);
        } else {
            await getEvent(result[0]);
        }
    };


    const searchEventsByName = async () => {
        const events = await loadEventsByDescription();
        const subscriptions = await loadSubscriptions();
        const result = setPropertiesSubscribed(events, subscriptions);
        const points = await drawPoints(result);
        setPoints(points);
    };

    const filterByAddress = () => {
        if (!addressText) {
            return events;
        }
        return events.filter((item) => {
            return item.address.includes(addressText);
        });
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const filterEvents = filterByAddress();
    const lastEventIndex = currentPage * eventsPerPage;
    const firstEventIndex = lastEventIndex - eventsPerPage;
    const currentEvent = filterEvents.slice(firstEventIndex, lastEventIndex);

    return (
        <div className="home">
            <div className="map">
                <YandexMap
                    points={points}
                    getEventByAddress={getEventByAddress}
                />
            </div>
            <div className={open ? "sidebar-1" : "closed-sidebar-1"}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Поиск событий"
                        value={eventNameText}
                        onChange={(e) => handleChangeSearchText(e)}
                    />
                    <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={searchEventsByName}
                    >
                        Поиск
                    </button>
                </div>
                {events.length != 0 ? (
                    <div className="event-list">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Адрес"
                            value={addressText}
                            onChange={(e) => handleChangeAddressText(e)}
                        />
                        <EventList
                            events={currentEvent}
                            loading={loading}
                            getEvent={getEvent}
                        />
                        <Pagination
                            eventsPerPage={eventsPerPage}
                            totalEvents={filterEvents.length}
                            paginate={paginate}
                        />
                    </div>
                ) : (
                    <div>
                        <h2>Введите в поиск, что вас интересует.</h2>
                    </div>
                )}
            </div>
            <div className={showEvent ? "sidebar-2" : "closed-sidebar-2"}>
                <button
                    type="button"
                    className="btn-close show"
                    onClick={handleClickCloseSidebar}
                />
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
                Поиск
            </button>
        </div>
    );
};

export default HomePage;
