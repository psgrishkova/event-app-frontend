import React, { useState, useEffect } from "react";
import { YMaps, Map, Placemark, ObjectManager } from "react-yandex-maps";
import "../HomePage/index.css";

const YandexMap = function ({ placemarks, getEventByAddress }) {
  const [objects, setObjects] = useState(placemarks);

  useEffect(() => {
    setObjects(placemarks);
  }, [placemarks]);

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
              <ObjectManager clusters={true}>
                {objects.map((item) => (
                  <li key={item.id}>
                    <Placemark
                      geometry={[item.x, item.y]}
                      key={item.id}
                      onClick={() => getEventByAddress(item.address)}
                    />
                  </li>
                ))}
              </ObjectManager>
            </ul>
          </Map>
        </div>
      </YMaps>
    </div>
  );
};

export default YandexMap;
