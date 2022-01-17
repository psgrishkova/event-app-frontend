import React from "react"

export default function BusProfile(user){
    console.log(user);
    return (
        <form className="form">
            <h3>Профиль</h3>

            <div className="form-group">
                <label>Название компании</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Название компании"
                    name="companyName"
                    value={user.value.companyName}
                />
            </div>

            <div className="form-group">
                <label>Адрес</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Адрес"
                    name="address"
                    value={user.value.address}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block">?Сохранить изменения?</button>
            </div>
        </form >
    )
}