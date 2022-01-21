import React from "react"
import "./index.css"
export default function DefProfile() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form className="form">
            <h3>Профиль</h3>

            <div className="form-group">
                <label>Имя пользователя</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Имя"
                    name="username"
                    value={user.username}
                />
            </div>

            <div className="form-group">
                <label>Город</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Город"
                    name="cityName"
                    value={user.cityName}
                />
            </div>

            <div className="form-group">
                <label>Дата рождения</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="День рождения"
                    name="bDay"
                    value={user.bday}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block">?Сохранить изменения?</button>
            </div>
        </form >
        </div>
        </div>
    )

}