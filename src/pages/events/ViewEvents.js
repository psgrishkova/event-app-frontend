import React, { useEffect, useState } from "react";
import api from "../../newApi";

export default function ViewDefEvents() {
    const [res, setRes] = useState([]);
    const role = JSON.parse(localStorage.getItem('user')).role
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(role);
        const fetchData = async () => {
            const events = await api.endpoints.getUserEvents();
            setRes(events.data);
            console.log(events.data)
            console.log(res);
        };
        fetchData();
    }, [])

    async function unsubscribeEvent(id) {
        await api.endpoints.unsubscribeEvent(id);
        console.log('Пользователь отписался от события')
    };

    async function deleteEvent(id) {
        await api.endpoints.deleteEvent(id);
        console.log('Событие удалено')
    };

    function handleSubmit(e, id) {
        console.log("Trying to delete event..." + id);
        role === 'USER_DEFAULT' ? unsubscribeEvent(id) :
            deleteEvent(id)
    };

    const [eventName, seteventName] = useState('');
    const [description, setdescription] = useState('');
    const [ageCensor, setageCensor] = useState('');
    const [startDate, setstartDate] = useState('');
    const [endDate, setendDate] = useState('');



    function editForm(event) {

        return (
            <div style={{
                position: 'absolute', borderRadius: '7px', padding: '10px', margin: '10px', color: 'white',
                width: '50%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: '10'
            }} >
                <form onSubmit={handleSubmitChanges}>
                    <h3>Форма изменения события</h3>
                    <p>Название события: <input
                        name='eventName'
                        type="text"
                        className="form-control"
                        style={{ color: '#1c8ef9' }}
                        onChange={(e) => { seteventName(e.target.value) }}
                        value={eventName}
                    /></p>
                    <p>Описание: <input
                        name='description'
                        type="text"
                        className="form-control"
                        style={{ color: '#1c8ef9' }}
                        onChange={(e) => { setdescription(e.target.value) }}
                        value={description}
                    /></p>
                    <p>Возрастной цензор: <input
                        name='ageCensor'
                        type="text"
                        className="form-control"
                        style={{ color: '#1c8ef9' }}
                        onChange={(e) => { setageCensor(e.target.value) }}
                        value={ageCensor}
                    /></p>
                    <p>Дата начала: <input
                        name='startDate'
                        type="datetime-local"
                        className="form-control"
                        style={{ color: '#1c8ef9' }}
                        onChange={(e) => { setstartDate(e.target.value) }}
                        value={startDate}
                    /></p>
                    <p>Дата окончания: <input
                        name='endDate'
                        type="datetime-local"
                        className="form-control"
                        style={{ color: '#1c8ef9' }}
                        onChange={(e) => { setendDate(e.target.value) }}
                        value={endDate}
                    /></p>
                    <p>Понравилось: {event.likeCounter}</p>
                    <button style={{marginRight:'20px'}} className="btn btn-primary" type="Submit">Сохранить</button>
                    <button className="btn btn-primary" type="Button" onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                        setEvent(null);
                    }}>Отмена</button>
                </form>
            </div>
        )
    }

    const updateEvent = async (newEvent) => {
        await api.endpoints.updateEvent(newEvent);
        console.log('Successfully update')
        window.location.reload();
    };

    function handleSubmitChanges() {
        const newEvent = {
            id: event.id,
            eventName: eventName,
            description: description,
            startDate: startDate,
            endDate: endDate,
            likeCounter: event.likeCounter,
            ageCensor: ageCensor,
        }

        updateEvent(newEvent);

        setVisible(false);
        setEvent(null);
    }

    const [event, setEvent] = useState();
    function handleChangeButton(e, i) {
        e.preventDefault();
        setEvent(i);
        console.log(event);

        seteventName(event.eventName);
        setdescription(event.description);
        setageCensor(event.ageCensor);
        setstartDate(event.startDate);
        setendDate(event.endDate);

        setVisible(true);
    }

    return (
        <div>
            <p style={{ color: '#1c8ef9' }}>Сохраненные события</p>
            {visible && editForm(event)}
            <ul>
                {res.map(item => (
                    <div style={{ backgroundColor: '#1c8ef96f', borderRadius: '7px', padding: '10px', margin: '10px', color: 'white' }} >
                        <form onSubmit={e => handleSubmit(e, item.id)}>
                            <li key={item.id}>
                                <p>Название события: {item.eventName}</p>
                                <p>Описание: {item.description}</p>
                                <p>Возрастной цензор: {item.ageCensor}</p>
                                <p>Дата начала: {item.startDate}</p>
                                <p>Дата окончания: {item.endDate}</p>
                                <p>Понравилось: {item.likeCounter}</p>

                                {role === 'USER_DEFAULT' ?
                                    <button type="submit" className="btn btn-primary">Отписаться</button> :
                                    <div>
                                        <button disabled={visible} type="Button" onClick={(e) => handleChangeButton(e, item)} className="btn btn-primary" style={{ marginRight: '100px' }}>Изменить</button>
                                        <button disabled={visible} type="submit" className="btn btn-primary" style={{ margin: '1px' }}>Удалить</button>
                                    </div>
                                }
                            </li>
                        </form>
                    </div>
                ))}
            </ul>
        </div>
    )
}