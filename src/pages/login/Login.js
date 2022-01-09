import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {

    state = {
      login: '',
      password: ''
    };

  handleSubmit = event => {
    event.preventDefault();
    const user = JSON.stringify({
      login: this.state.login,
      password: this.state.password
    });
    console.log(user);
    axios.post('http://localhost:8080/users/login', user, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
      })
  }

  handleChange = (event) => {
    this.setState({ login: event.target.value, password: event.target.value });
    console.log(this.state.login);
    console.log(this.state.password);
  };

  render() {
    return (
      <form className="form" onSubmit = { this.handleSubmit }>
        <h3>Войти</h3>

        <div className="form-group">
          <label>Логин</label>
          <input
            type="text"
            className="form-control"
            name = "login"
            placeholder="Логин"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            name = "login"
            placeholder="Пароль"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    );
  }
}
