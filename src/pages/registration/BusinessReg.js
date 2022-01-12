import React, { Component } from "react";
import axios from "axios";

export default class BusinessReg extends Component {
  state = {
    login: '',
    password: '',
    cityName: '',
    companyName: '',
    address: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const user = JSON.stringify({
      login: this.state.login,
      password: this.state.password,
      cityName: this.state.cityName,
      companyName: this.state.companyName,
      address: this.state.address
    });

    console.log(user);

    axios.post('http://localhost:8080/users/register/business', user, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
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

  handleChangeCompanyName = (event) => {
    this.setState({
      companyName:event.target.value
    })
  };

  handleChangeAddress = (event) => {
    this.setState({
      address:event.target.value
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
          <label>Город</label>
          <input
            type="cityName"
            className="form-control"
            name="cityName"
            placeholder="Город"
            onChange={this.handleChangeCityName}
          />
        </div>

        <div className="form-group">
          <label>Название компании</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Название компании" 
            name="companyName"
            onChange={this.handleChangeCompanyName}
          />
        </div>

        <div className="form-group">
          <label>Адрес</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Адрес" 
            name="address"
            onChange={this.handleChangeAddress}
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
