import React from "react"
import "./index.css"
export default function BusProfile(){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    
    return (
        <div className="auth-wrapper">
        <div className="auth-inner">
        <form className="form">
            <h3>Профиль</h3>

            <div className="form-group">
                <label>Название компании</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Название компании"
                    name="companyName"
                    value={user.companyName}
                    required
                />
            </div>

            <div className="form-group">
                <label>Адрес</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Адрес"
                    name="address"
                    value={user.address}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block">Сохранить изменения?</button>
                <button type="submit" className="btn btn-primary">Отмена</button>
            </div>
        </form >
        </div>
        </div>
    )
}