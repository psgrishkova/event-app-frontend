import React, {useState} from "react"
import "./index.css"
import api from "../../newApi/";

export default function BusProfile() {
    const user = JSON.parse(localStorage.getItem('user'));

    const [companyName, setCompanyName] = useState(user.companyName);
    const [address, setAddress] = useState(user.address);

    const handleSubmit = async (e) => {
        e.preventDefault();
        user.companyName = companyName;
        user.address = address;
        localStorage.setItem("user", JSON.stringify(user));
        api.endpoints.updateBusinessProfile(user);
        alert('Профиль обновлен');
    }
    
    const handleChangeCompanyName = (e) => {
        setCompanyName(e.target.value);
    }
    
    
    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    }

    
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
                    value={companyName}
                    onChange={(e) => handleChangeCompanyName(e)}
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
                    value={address}
                    onChange={(e) => handleChangeAddress(e)}
                />
            </div>
            <div>
                <button type="submit" className="btn btn-primary btn-block" onClick={(e) => handleSubmit(e)}>Сохранить изменения</button>
            </div>
        </form >
        </div>
        </div>
    )
}