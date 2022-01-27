import React, {useState, useEffect} from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import "../main/MainPage.css";

const YandexMap = function ({ placemarks, getEventByAddress }) {

  const [objects, setObjects] = useState(placemarks);

  useEffect(() => {
      setObjects(placemarks);
  }, [placemarks])

  return (
    
    <div>
      <YMaps>
        <div>
          <Map
            defaultState={{ center: [53.195878, 50.100202], zoom: 12 }}
            width={"100%"}
            height={"100vh"}
          >
            <ul>
              {objects.map((item) => (
                <li key = {item.id}>
                  <Placemark geometry={[item.x, item.y] } key = {item.id} onClick={() => getEventByAddress(item.address)} />
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
