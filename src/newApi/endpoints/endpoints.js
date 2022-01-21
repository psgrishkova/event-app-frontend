import axios from "../axios";
import React from "react";

const endpoints = {
    businessRegistration: (data) => axios.post("users/register/business", data),
    defaultRegistration: (data) => axios.post("users/register/default", data),
    login: (data) => axios.post("users/login", data),
    getProfile: () => axios.get("users/profile/business"),
    getUserEvents: () => axios.get("events/mine"),
    unsubscribeEvent: (id) => axios.put("events/unsubscribe/?eventId="+id),
    deleteEvent : (id) => axios.delete("events/"+id),
    updateEvent : (event) => axios.put("events/", event)
};

export default endpoints;