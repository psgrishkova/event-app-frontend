
import React, {useState} from "react"
import "./index.css"
import api from "../../newApi/";

export default function DefProfile() {
    
    
    const user = JSON.parse(localStorage.getItem('user'));

    const [username, setUsername] = useState(user.username);
    const [cityName, setCityName] = useState(user.cityName);
    const [bDay, setBDay] = useState(user.bday);

    const handleSubmit = async (e) => {
        e.preventDefault();
        user.username = username;
        user.cityName = cityName;
        user.bDay = bDay;
        localStorage.setItem("user", JSON.stringify(user));
        api.endpoints.updateDefaultProfile(user);
        alert('Профиль обновлен');
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    
    
    const handleChangeBDay = (e) => {
        setBDay(e.target.value);
    }

    
    const handleChangeCityName = (e) => {
        setCityName(e.taget.value);
    }
    

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

                    onChange={ (e) => handleChangeUsername(e)}

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

                    onChange={(e) => handleChangeCityName(e)}

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

                    value={bDay}
                    onChange={(e) => handleChangeBDay(e)}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)}>Сохранить изменения</button>
            </div>

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