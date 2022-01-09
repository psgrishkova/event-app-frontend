import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import Registration from "./Registration";

export default class BusinessReg extends Component {
  render() {
    return (
      <form className="form">
        <Registration />
        <div className="form-group">
          <label>Название компании</label>
          <input
            type="text"
            className="form-control"
            placeholder="Название компании"
          />
        </div>

        <div className="form-group">
          <label>Город</label>
          <input type="text" className="form-control" placeholder="Город" />
        </div>

        <div className="form-group">
          <label>Адрес</label>
          <input type="text" className="form-control" placeholder="Адрес" />
        </div>

        <SubmitButton />
      </form>
    );
  }
}
