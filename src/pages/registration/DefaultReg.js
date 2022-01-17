import React, { Component } from "react";
import api from "../../API";
import axios from "axios";

export default class DefaultReg extends Component {
  state = {
    login: '',
    password: '',
    cityName: '',
    username: '',
    bDay: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = JSON.stringify({
      login: this.state.login,
      password: this.state.password,
      cityName: this.state.cityName,
      username: this.state.username,
      bDay: this.state.bDay
    });

    console.log(user);
    
    api.post('users/register/default',user)
    .then(res=>{
      console.log(res);
      console.log(res.data);
      window.location = "/login/form" //This line of code will redirect you once the submission is succeed
    })
  }

  handleChangeLogin = (event) => {
    this.setState({
      login:event.target.value
    })
  };

  handleChangePass = (event) => {
    this.setState({
      password:event.target.value
    })
  };

  handleChangeCityName = (event) => {
    this.setState({
      cityName:event.target.value
    })
  };

  handleChangeUsername = (event) => {
    this.setState({
      username:event.target.value
    })
  };

  handleChangebDay = (event) => {
    this.setState({
      bDay:event.target.value
    })
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3>Регистрация</h3>
        <div className="form-group">
          <label>Логин</label>
          <input 
          type="text" 
          className="form-control" 
          placeholder="Логин" 
          name="login"
          onChange={this.handleChangeLogin}  
        />
        </div>

        <div className="form-group">
          <label>Пароль</label>
          <input
            type="password"
            className="form-control"
            placeholder="Пароль"
            name="password"
            onChange={this.handleChangePass}
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
          <label>Имя пользователя</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Имя" 
            name="username"
            onChange={this.handleChangeUsername}
          />
        </div>

        <div className="form-group">
          <label>Город</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Город" 
            name="cityName"
            onChange={this.handleChangeCityName}
          />
        </div>

        <div className="form-group">
          <label>Дата рождения</label>
          <input
            type="date"
            className="form-control"
            placeholder="День рождения"
            name="bDay"
            onChange={this.handleChangebDay}
          />
        </div>
        <div>
        <button type="submit" className="btn btn-primary btn-block">
          Зарегистрировать
        </button>
      </div>
      </form>
    );
  }
}
