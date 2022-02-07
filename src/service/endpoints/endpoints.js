import axios from "../axios";

const apiKey = "6601663f-f408-4249-9bd2-c97c8551cea8";

const endpoints = {
    businessRegistration: (data) => axios.post("users/businesses", data),
    defaultRegistration: (data) => axios.post("users/defaults", data),
    login: (data) => axios.post("users", data),
    updateBusinessProfile: (data) => axios.put("users/businesses", data),
    updateDefaultProfile: (data) => axios.put("users/defaults", data),
    getEvents: () => axios.get("events"),
    deleteEvent: (id) => axios.delete(`events/${id}`),
    updateEvent: (data) => axios.put("events", data),
    createEvent: (data) => axios.post("events", data),
    getEventsByName: (name) => axios.get(`events/?keyword=${name}`),
    getSubscriptions: () => axios.get("events/subscriptions"),
    subscribe: (eventId) => axios.post(`events/subscriptions/?eventId=${eventId}`),
    unsubscribe: (eventId) =>
        axios.delete(`events/subscriptions/?eventId=${eventId}`),
    addReview: (eventId, review) =>
        axios.put(`events/subscriptions/?eventId=${eventId}&review=${review}`),
    getReviews: (eventId) => axios.get(`events/subscriptions/reviews/?eventId=${eventId}`),
    getPoint: (address) =>
        axios.get(
            `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`)
};

export default endpoints;