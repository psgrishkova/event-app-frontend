import Cookies from 'universal-cookie';
import axios from "axios";

const apiKey = "6601663f-f408-4249-9bd2-c97c8551cea8";
const endpoints = {
    getPlacemarks: (address) => axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${address}&format=json`),
    getEvents: () => axios.get("http://localhost:8080/events", { headers: {Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJidXNpbmVzc191c2VyXzEiLCJyb2xlcyI6WyJVU0VSX0JVU0lORVNTIl0sImlkIjozMSwiaWF0IjoxNjQyNjEwOTMwLCJleHAiOjE2NDI2MTQ1MzB9.dzfgXJuSRckWkxawvk3-eG4qg98UftI-NHEQB9-jmVA"}} )
};
  
  export default endpoints;