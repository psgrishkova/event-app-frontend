import React, {useState, useEffect} from "react";
import api from "../../../service";
import "../index.css";

function BusinessReg() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [address, setAddress] = useState('');

    const [secPass, setSecPass] = useState('');
    const [secPassDirty, setSecPassDirty] = useState(false);
    const [passError, setPassError] = useState('Пароли должны совпадать');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (passError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [passError])

    function createJSON() {
        return JSON.stringify({
            login: login,
            password: password,
            companyName: companyName,
            address: address
        });
    }

    async function request(user) {
        await api.endpoints.businessRegistration(user);
        window.location = "/login";
    };

    async function handleSubmit(event) {
        localStorage.clear();
        event.preventDefault();
        await request(createJSON());
    }

    const handleChangeLogin = (e) => {
        setLogin(e.target.value);
    };

    const handleChangePass = (e) => {
        setPassword(e.target.value);
    };

    const handleChangeCompanyName = (e) => {
        setCompanyName(e.target.value);
    };

    const handleChangeAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleChangeSecPass = (e) => {
        setSecPass(e.target.value);
        if (e.target.value != password)
            setPassError('Пароли должны совпадать');
        else setPassError('');
    }

    const blurHandler = (e) => {
        setSecPassDirty(true)
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form className="form" onSubmit={handleSubmit}>
                    <h3>Регистрация</h3>
                    <div className="form-group">
                        <label>Login</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Login"
                            name="login"
                            onChange={e => handleChangeLogin(e)}
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={e => handleChangePass(e)}
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Repeat password</label>
                        {(secPassDirty && passError) && <div style={{color: 'red', fontSize: '10pt'}}>{passError}</div>}
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Repeat password"
                            value={secPass}
                            onChange={handleChangeSecPass}
                            onBlur={e => blurHandler(e)}
                            name="secPass"
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Название компании</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Название компании"
                            name="companyName"
                            onChange={e => handleChangeCompanyName(e)}
                            required={true}
                        />
                    </div>

                    <div className="form-group">
                        <label>Адрес</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Адрес"
                            name="address"
                            onChange={e => handleChangeAddress(e)}
                            required={true}
                        />
                    </div>
                    <div>
                        <button disabled={!formValid} type="submit" className="btn btn-primary btn-block">
                            Зарегистрировать
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default BusinessReg;
