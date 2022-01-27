import React, { Component } from "react";
import city from '../city.png';
import  './index.css';

const EventElement = function (props) {
  return <div className="event-element" >
        <img src={city} style={{width: '200 px', height: '200 px'}} />
        <hr />
      <div className="event-element-name">
            {props.item.eventName}
      </div>
      <div>
            {props.item.address}  
      </div>
  </div>;
};
export default EventElement;
