import React, { Component } from "react";
import axios from "axios";
import api from "../../API";

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
    /*
        axios.post('http://localhost:8080/users/login', user, {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json'
            }
          })
          .then(res=>{
            console.log(res);
            console.log("Bearer "+res.data);
            localStorage.setItem('token', res.data);
            window.location = "/profile" 
          })
          */
    localStorage.clear();
    api.post('users/login', user)
      .then(response => {
        localStorage.setItem('token', 'Bearer ' + response.data.token);
        localStorage.setItem('role',response.data.role);
        console.log(response.data.role);
        console.log(response.data.token);
        window.location = "/profile";
      })
  }

  handleChangeLogin = (event) => {
    this.setState({ login: event.target.value });
  };

  handleChangePass = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3>Войти</h3>

        <div className="form-group">
          <label>Логин</label>
          <input
            type="text"
            className="form-control"
            name="login"
            placeholder="Логин"
            onChange={this.handleChangeLogin}
          />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Пароль"
            onChange={this.handleChangePass}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    );
  }
}
