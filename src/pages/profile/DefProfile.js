import React, { useState } from "react"
import "./index.css"

export default function DefProfile() {
    const user = JSON.parse(localStorage.getItem('user'));

    const [username, setusername] = useState(user.username);
    const [cityName, setcityName] = useState(user.cityName);
    const [bday, setbday] = useState(user.bday);

    const handleSave = (e) => {
        
    }

    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form className="form" onSubmit={handleSave}>
            <h3>Профиль</h3>

            <div className="form-group">
                <label>Имя пользователя</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Имя"
                    name="username"
                    value={username}
                    required = {true}
                    onChange={(e) => {setusername(e.target.value)}}
                />
            </div>

            <div className="form-group">
                <label>Город</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Город"
                    name="cityName"
                    value={cityName}
                    required = {true}
                    onChange={(e) => {setcityName(e.target.value)}}
                />
            </div>

            <div className="form-group">
                <label>Дата рождения</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="День рождения"
                    name="bDay"
                    value={bday}
                    required = {true}
                    onChange={(e) => {setbday(e.target.value)}}
                />
            </div>
        </form >
        </div>
        </div>
    )
}