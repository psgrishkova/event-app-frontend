import React from 'react';
import city from './city.png';
const EventForm = function ({event}) {
    return (
    <div>
    <img src={city} style={{width: '100 %', height: '200 px'}} />
    <hr style={{height: '10 px'}}/>
    <div className="event-form-name">
            {event.eventName}
      </div>
    <div className="event-form-description">
            {event.description}
    </div>  
    <div className="event-form-date">
            {event.startDate}
    </div>   
    <div className="event-form-date">
            {event.endDate}
    </div>
    <div className="event-form-address">
            {event.address}  
    </div>   
    <div className="event-form-like-counter">
            {event.likeCounter}
    </div>     
    <div className="event-form-age-censor">
            {event.ageCensor}  
    </div>
    </div>  );
}

export default EventForm;