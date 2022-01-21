import axios from "../axios";
import React from "react";

const apiKey = "6601663f-f408-4249-9bd2-c97c8551cea8";
const endpoints = {
    businessRegistration: (data) => axios.post("users/register/business", data),
    defaultRegistration: (data) => axios.post("users/register/default", data),
    login: (data) => axios.post("users/login", data),
    getProfile: () => axios.get("users/profile/business"),
<<<<<<< HEAD
    getUserEvents: () => axios.get("events/mine"),
    unsubscribeEvent: (id) => axios.put("events/unsubscribe/?eventId="+id),
    deleteEvent : (id) => axios.delete("events/"+id),
    updateEvent : (event) => axios.put("events/", event)
=======
    getEvents: () => axios.get("events"),
    getPlacemarks: (address) => axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`),
    getSubscriptions: () => axios.get('events/subscriptions'),
    unsubscribe: (eventId) => axios.put(`events/unsubscribe/?eventId=${eventId}`),
    subscribe:  (eventId) => axios.put(`events/subscribe/?eventId=${eventId}`),
    addReview: (eventId, review) => axios.put(`unsubscribe/?eventId=${eventId}&review=${review}`)

>>>>>>> version_1
};

export default endpoints;