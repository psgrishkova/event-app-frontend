import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "../main/MainPage.css";

const YandexMap = function ({ placemarks, loading, getEventById }) {
    if(loading) {
      return(<h2>Loading...</h2>)
    }
  return (
    
    <div>
      <YMaps>
        <div>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 12 }}
            width={"100%"}
            height={"100vh"}
          >
            <ul>
              {placemarks.map((item) => (
                <li key = {item.id} >
                  <Placemark geometry={[item.y, item.x] } key = {item.id} onClick={() => getEventById(item.id)} />
                </li>
              ))}
            </ul>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandexMap;
