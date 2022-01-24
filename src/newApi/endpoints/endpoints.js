import axios from "../axios";
import React from "react";

const apiKey = "6601663f-f408-4249-9bd2-c97c8551cea8";
const endpoints = {
    businessRegistration: (data) => axios.post("users/register/business", data),
    defaultRegistration: (data) => axios.post("users/register/default", data),
    login: (data) => axios.post("users/login", data),
    updateBusinessProfile: (data) => axios.put("users/edit/business", data),
    updateDefaultProfile: (data) => axios.put("users/edit/default", data),
    getProfile: () => axios.get("users/profile/business"),
    getEvents: () => axios.get("events"),
    getPlacemarks: (address) => axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`),
    getSubscriptions: () => axios.get('events/subscriptions'),
    subscribe:  (eventId) => axios.post(`events/subscribe/?eventId=${eventId}`),
    unsubscribe: (eventId) => axios.delete(`events/unsubscribe/?eventId=${eventId}`),
    addReview: (eventId, review) => axios.put(`events/add/review/?eventId=${eventId}&review=${review}`),
    getReviews: (eventId) => axios.get(`events/reviews/?eventId=${eventId}`),
    getUserEvents: () => axios.get("events/mine"),
    deleteEvent : (id) => axios.delete(`events/${id}`),
    updateEvent : (data) => axios.put("events", data),
    createEvent : (data) => axios.post("events", data)
};

export default endpoints;