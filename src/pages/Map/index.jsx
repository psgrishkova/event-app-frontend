import React, {useState, useEffect} from "react";
import {
    YMaps,
    Map,
    Placemark,
    Clusterer
} from "react-yandex-maps";
import "../HomePage/index.css";

const YandexMap = function ({points, getEventByAddress}) {

    const [objects, setObjects] = useState(points);

    useEffect(() => {
        setObjects(points);
    }, [points]);

    return (
        <div>
            <YMaps>
                <div>
                    <Map
                        defaultState={{center: [53.195878, 50.100202], zoom: 12}}
                        width={"100%"}
                        height={"100vh"}
                    >
                        <ul>
                        {objects?.map((item) => (
                            <li key={item.id}>
                            <Placemark
                                geometry={[item.x, item.y]}
                                key={item.id}
                                onClick={async () => getEventByAddress(item.address)}
                                properties={
                                    {iconContent: item.count}
                                }
                            />
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
