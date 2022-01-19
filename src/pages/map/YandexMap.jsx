import React, { useState, useEffect } from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import "../main/MainPage.css"
import api from "../../services/api/endpoints"
import axios from "axios";
const YandexMap = function (props) {
    return (  
    <div>
  <YMaps>
    <div>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={"100%"} height={"100vh"}>
      {props.placemarks.map((item) => <Placemark geometry={[item.y, item.x]} />)}
      </Map>
    </div>
  </YMaps>

    </div>);
}

export default YandexMap;