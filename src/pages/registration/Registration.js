import React, { Component } from "react";

export default class Registration extends Component {
  render() {
    return (
      <div>
        <h3>Регистрация</h3>
        <div className="form-group">
          <label>Логин</label>
          <input type="text" className="form-control" placeholder="Логин" />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
          />
        </div>

        <div className="form-group">
          <label>Повторите пароль</label>
          <input
            type="password"
            className="form-control"
            placeholder="Повторите пароль"
          />
        </div>

        <div className="form-group">
          <label>Город</label>
          <input
            type="text"
            className="form-control"
            placeholder="Город"
            name = ""
          />
        </div>
      </div>
    );
  }
}
