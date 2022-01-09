import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import Registration from "./Registration";

export default class DefaultReg extends Component {
  render() {
    return (
      <form className="form">
        <Registration />
        <div className="form-group">
          <label>Имя пользователя</label>
          <input type="text" className="form-control" placeholder="Имя" />
        </div>

        <div className="form-group">
          <label>Город</label>
          <input type="text" className="form-control" placeholder="Город" />
        </div>

        <div className="form-group">
          <label>Дата рождения</label>
          <input
            type="date"
            className="form-control"
            placeholder="День рождения"
          />
        </div>
        <SubmitButton />
      </form>
    );
  }
}
