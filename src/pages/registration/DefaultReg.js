import React, { useState, useEffect } from "react";
import api from "../../newApi";
import "./index.css";
function DefaultReg() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [cityName, setCityName] = useState('');
  const [username, setUsername] = useState('');
  const [bDay, setbDay] = useState('');

  const [secPass, setSecPass] = useState('');
  const [secPassDirty, setSecPassDirty] = useState(false);
  const [passError, setPassError] = useState('Пароли должны совпадать');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (passError) {
      setFormValid(false);
    }
    else {
      setFormValid(true);
    }
  }, [passError])

  function createJSON() {
    return JSON.stringify({
      login: login,
      password: password,
      cityName: cityName,
      username: username,
      bDay: bDay
    });
  }

  async function request(user) {
    await api.endpoints.defaultRegistration(user);
    window.location = "/login/form";
  };

  async function handleSubmit(event) {
    localStorage.clear();
    event.preventDefault();

    request(createJSON());
  }

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePass = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeCityName = (e) => {
    setCityName(e.target.value);
  };

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangebDay = (e) => {
    setbDay(e.target.value);
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
        <label>Логин</label>
        <input
          type="text"
          className="form-control"
          placeholder="Логин"
          name="login"
          onChange={e => handleChangeLogin(e)}
          required = {true}
        />
      </div>

      <div className="form-group">
        <label>Пароль</label>
        <input
          type="password"
          className="form-control"
          placeholder="Пароль"
          name="password"
          onChange={e => handleChangePass(e)}
          required = {true}
        />
      </div>

      <div className="form-group">
        <label>Повторите пароль</label>
        {(secPassDirty && passError) && <div style={{ color: 'red', fontSize: '10pt' }}>{passError}</div>}
        <input
          type="password"
          className="form-control"
          placeholder="Повторите пароль"
          value={secPass}
          onChange={handleChangeSecPass}
          onBlur={e => blurHandler(e)}
          name="secPass"
          required = {true}
        />
      </div>
      <div className="form-group">
        <label>Имя пользователя</label>
        <input
          type="text"
          className="form-control"
          placeholder="Имя"
          name="username"
          onChange={e => handleChangeUsername(e)}
          required = {true}
        />
      </div>

      <div className="form-group">
        <label>Город</label>
        <input
          type="text"
          className="form-control"
          placeholder="Город"
          name="cityName"
          onChange={e => handleChangeCityName(e)}
          required = {true}
        />
      </div>

      <div className="form-group">
        <label>Дата рождения</label>
        <input
          type="date"
          className="form-control"
          placeholder="День рождения"
          name="bDay"
          onChange={e => handleChangebDay(e)}
          required = {true}
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


export default DefaultReg;
