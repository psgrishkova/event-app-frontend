import React, { Component } from "react";
import axios from "axios";


export default class ViewProfile extends Component {
    
    state = {
        eventName:'',
        description:'',
        startDate: '',
        endDate: '',
        likeCounter: '',
        ageCensor: ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const token='Bearer ' + localStorage.getItem('token');
        console.log(token);
        const newEvent = JSON.stringify({
            eventName: this.state.eventName,
            description:this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            likeCounter: this.state.likeCounter,
            ageCensor: this.state.ageCensor
          });
          console.log(newEvent);
          axios.post('http://localhost:8080/events/', newEvent, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              }
            })
        .then(resp => {
        console.log(resp.data);
        console.log('Событие сохранено');
      })
    }

    handleChangeEventName = (event) => {
        this.setState({ eventName: event.target.value});
    };
    
     handleChangeDescription = (event) => {
         this.setState({ description: event.target.value});
    };

    handleChangeStartDate = (event) => {
        this.setState({ startDate: event.target.value});
    };
    
     handleChangeEndDate = (event) => {
         this.setState({ endDate: event.target.value});
    };

    handleChangeLikeCounter = (event) => {
        this.setState({ likeCounter: event.target.value});
    };
    
     handleChangeAgeCensor = (event) => {
         this.setState({ ageCensor: event.target.value});
    };

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <h3>Создание события</h3>

                <div className="form-group">
                <label>Название события</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Название события" 
                    name="eventName"
                    onChange={this.handleChangeEventName}
                />
                </div>

                <div className="form-group">
                <label>Описание</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Описание" 
                    name="description"
                    onChange={this.handleChangeDescription}
                />
                </div>

                <div className="form-group">
                <label>Дата начала</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    placeholder="Дата начала"
                    name="startDate"
                    onChange={this.handleChangeStartDate}
                />
                </div>

                <div className="form-group">
                <label>Дата окончания</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    placeholder="Дата окончания"
                    name="endDate"
                    onChange={this.handleChangeEndDate}
                />
                </div>

                <div className="form-group">
                <label>Количество сохранений</label>
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Количество сохранений" 
                    name="likeCounter"
                    onChange={this.handleChangeLikeCounter}
                />
                </div>

                <div className="form-group">
                <label>Возрастной цензор</label>
                <input 
                    type="number" 
                    className="form-control" 
                    placeholder="Возрастной цензор" 
                    name="ageCensor"
                    onChange={this.handleChangeAgeCensor}
                />
                </div>

                <div>
                <button type="submit" className="btn btn-primary btn-block">Создать</button>
                </div>
            </form >
        )
    }
}