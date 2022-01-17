import React from "react"

export default function DefProfile(user) {
    console.log(user)
    return (
        <form className="form">
            <h3>Профиль</h3>

            <div className="form-group">
                <label>Имя пользователя</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Имя"
                    name="username"
                    value={user.value.username}
                />
            </div>

            <div className="form-group">
                <label>Город</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Город"
                    name="cityName"
                    value={user.value.cityName}
                />
            </div>

            <div className="form-group">
                <label>Дата рождения</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="День рождения"
                    name="bDay"
                    value={user.value.bday}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block">?Сохранить изменения?</button>
            </div>
        </form >
    )

}