import React, {createElement, useEffect, useState} from "react";
import api from "../../../service";
import "./index.css";
import Moment from 'moment';

export default function ViewDefEvents() {
    const [res, setRes] = useState([]);
    const role = JSON.parse(localStorage.getItem('user')).role
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        console.log(role);
        const fetchData = async () => {
            const events = await api.endpoints.getSubscriptions();
            setRes(events.data);
            console.log(events.data)
            console.log(res);
        };
        fetchData();
    }, [])

    async function unsubscribeEvent(id) {
        await api.endpoints.unsubscribe(id);
        console.log('Пользователь отписался от события')
    };

    async function createEvent(id) {
        await api.endpoints.createEvent(id);
        console.log('Событие сохранено')
    };


    async function deleteEvent(id) {
        await api.endpoints.deleteEvent(id);
        console.log('Событие удалено')
    };


    const updateEvent = async (newEvent) => {
        await api.endpoints.updateEvent(newEvent);
        console.log('Successfully update')
        window.location.reload();
    };

    function handleSubmit(e, id) {
        console.log("Trying to delete event..." + id);
        role === 'USER_DEFAULT' ? api.endpoints.unsubscribe(id) :
            api.endpoints.deleteEvent(id)
    };

    const [eventName, seteventName] = useState('eventName');
    const [description, setdescription] = useState('description');
    const [ageCensor, setageCensor] = useState('ageCensor');
    const [startDate, setstartDate] = useState('');
    const [address, setAddress] = useState('address');
    const [endDate, setendDate] = useState('');
    const [likeCounter, setlikeCounter] = useState(0)

    function editForm() {
        return (
            <div style={{
                position: 'fixed', borderRadius: '7px', padding: '10px', margin: '-90px', color: 'white',
                width: '50%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                zIndex: '10'
            }}>
                <form onSubmit={handleSubmitChanges}>
                    <h3>Форма изменения события</h3>
                    <p>Название события: <input
                        name='eventName'
                        type="text"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            seteventName(e.target.value)
                        }}
                        value={eventName}
                        required={true}
                    /></p>
                    <p>Описание: <input
                        name='description'
                        type="text"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            setdescription(e.target.value)
                        }}
                        value={description}
                        required={true}
                    />
                    </p>
                    <p>Адрес: <input
                        name='address'
                        type="text"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            setAddress(e.target.value)
                        }}
                        value={address}
                        required={true}
                    /></p>
                    <p>Возрастной цензор: <input
                        name='ageCensor'
                        type="text"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            setageCensor(e.target.value)
                        }}
                        value={ageCensor}
                        required={true}
                    /></p>
                    <p>Дата начала: <input
                        name='startDate'
                        type="datetime-local"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            setstartDate(e.target.value)
                        }}
                        value={startDate}
                        required={true}
                    /></p>
                    <p>Дата окончания: <input
                        name='endDate'
                        type="datetime-local"
                        className="form-control"
                        style={{color: '#1c8ef9'}}
                        onChange={(e) => {
                            setendDate(e.target.value)
                        }}
                        value={endDate}
                        required={true}
                    /></p>
                    <p>Понравилось: {likeCounter}</p>
                    <button style={{marginRight: '20px'}} className="btn btn-primary" type="Submit">Сохранить</button>
                    <button className="btn btn-primary" type="Button" onClick={(e) => {
                        e.preventDefault();
                        setVisible(false);
                        setEvent(null);
                    }}>Отмена
                    </button>
                </form>
            </div>
        )
    }


    function handleSubmitChanges() {
        const newEvent = {
            id: event.id,
            eventName: eventName,
            description: description,
            startDate: startDate,
            endDate: endDate,
            address: address,
            likeCounter: likeCounter,
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
        setAddress(event.address);
        setageCensor(event.ageCensor);
        setstartDate(event.startDate);
        setendDate(event.endDate);
        setlikeCounter(event.likeCounter);
        setVisible(true);
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <div>
                    <h2 style={{color: '#1c8ef9'}}>Мои события:
                    </h2>
                    {visible && editForm(event)}
                    <ul>
                        {res.map(item => (
                            <div style={{
                                backgroundColor: '#1c8ef96f',
                                borderRadius: '7px',
                                padding: '10px',
                                margin: '10px',
                                color: 'black',
                            }}>
                                <form onSubmit={e => handleSubmit(e, item.id)}>
                                    <li key={item.id}>
                                        <strong>
                                        <p><strong>Название события:</strong> {item.eventName}</p>
                                        <p><strong>Описание:</strong> {item.description}</p>
                                        <p><strong> Адрес:</strong> {item.address}</p>
                                        <p><strong> Возрастной цензор: </strong>{item.ageCensor}</p>
                                            <p><strong>Дата начала:</strong> {Moment(item.startDate).format('YYYY/MM/DD HH:mm')}</p>
                                        <p><strong>Дата окончания:</strong> {Moment(item.endDate).format('YYYY/MM/DD HH:mm')}</p>
                                        <p><strong>Понравилось:</strong> {item.likeCounter}</p>
                                        </strong>
                                        {role === 'USER_DEFAULT' ?
                                            <button type="submit" className="btn btn-primary">Отписаться</button> :
                                            <div style={{justifyContent: 'space-between'}}>
                                                <button disabled={visible} type="Button"
                                                        onClick={(e) => handleChangeButton(e, item)}
                                                        className="btn btn-primary"
                                                        style={{marginRight: '200px'}}>Изменить
                                                </button>
                                                <button disabled={visible} type="submit" className="btn btn-primary"
                                                        style={{margin: '1px'}}>Удалить
                                                </button>
                                            </div>
                                        }
                                    </li>
                                </form>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}