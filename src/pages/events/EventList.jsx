import React from 'react';
import EventElement from './EventElement';
import "./EventList.css";
const EventList = function ({events, loading, getEvent}) {
    if(loading) {
        return <h2> Loading... </h2>
    }
    return (  
        <div>
            <ul>
            {events.map((item) => <li key = {item.id} onClick = {() => getEvent(item) }><EventElement item = {item} key = {item.id} /></li>)}
            </ul>  
        </div>  
    );
}

export default EventList;