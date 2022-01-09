import React, { Component } from "react";

export default class SubmitButton extends Component {
  render() {
    return (
      <div>
        <button type="submit" className="btn btn-primary btn-block">
          Зарегистрировать
        </button>
      </div>
    );
  }
}
