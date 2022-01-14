import React, { Component, useState } from "react";
import axios from "axios";


export default class ViewProfile extends Component {
    
    state = {
        username: '',
        role: '',
        cityName: '',
        bday: ''
      };

    handleSubmit = event => {
        const token='Bearer ' + localStorage.getItem('token');
        console.log(token);
        event.preventDefault();
        axios.get('http://localhost:8080/users/profile/default',{
            headers: {
                'Authorization': token
              }
            })
        .then(resp => {
        console.log(resp.data);
        this.setState({
            username : resp.data.username,
            role : resp.data.role,
            cityName : resp.data.cityName,
            bday : resp.data.bday
        })
        console.log(this.state)
      })
    }

    componentDidMount() { console.log('Component did mount!') 
    const token='Bearer ' + localStorage.getItem('token');
    console.log(token);
    //event.preventDefault();
    axios.get('http://localhost:8080/users/profile/default',{
        headers: {
            'Authorization': token
          }
        })
    .then(resp => {
    console.log(resp.data);
    this.setState({
        username : resp.data.username,
        role : resp.data.role,
        cityName : resp.data.cityName,
        bday : resp.data.bday
    })
    console.log(this.state)
  })
    }

    

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Профиль</h3>

                <div className="form-group">
                <label>Имя пользователя</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Имя" 
                    name="username"
                    value={this.state.username}
                />
                </div>

                <div className="form-group">
                <label>Город</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Город" 
                    name="cityName"
                    value={this.state.cityName}
                />
                </div>

                <div className="form-group">
                <label>Дата рождения</label>
                <input
                    type="date"
                    className="form-control"
                    placeholder="День рождения"
                    name="bDay"
                    value={this.state.bday}
                />
                </div>
                <div>
                <button type="submit" className="btn btn-primary btn-block">?Сохранить изменения?</button>
                </div>
            </form >
        )
    }
}