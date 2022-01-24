import React, { Component } from "react";
import api from "../../newApi";


export default class CreateEvent extends Component {
    
    state = {
        eventName:'',
        description:'',
        address:'',
        startDate: '',
        endDate: '',
        likeCounter: '',
        ageCensor: '',
        address : ''
    };

    handleSubmit = event => {
        event.preventDefault();
        const newEvent = JSON.stringify({
            eventName: this.state.eventName,
            description:this.state.description,
            address: this.state.address,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            likeCounter: this.state.likeCounter,
            ageCensor: this.state.ageCensor,
            address : this.state.address
          });
          console.log(newEvent);
          api.endpoints.createEvent(newEvent);
          console.log("Событие сохранено")
          window.location="/events";
      alert('Событие сохранено');

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
    
    handleChangeAddress = (event) => {
        this.setState({ address: event.target.value});
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

    handleChangeAddress = (event) => {
         this.setState({ address: event.target.value});
    };

    render() {
        return (
            <div className="auth-wrapper">

            <div className="auth-inner">
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
                    required = {true}
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
                    required = {true}
                />
                </div>

                <div className="form-group">
                <label>Адрес</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Адрес" 
                    name="Address"
                    onChange={this.handleChangeAddress}
                    required = {true}
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

                <div className="form-group">
                <label>Дата начала</label>
                <input
                    type="datetime-local"
                    className="form-control"
                    placeholder="Дата начала"
                    name="startDate"
                    onChange={this.handleChangeStartDate}
                    required = {true}
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
                    required = {true}
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
                    required = {true}
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
                    required = {true}
                />
                </div>

                <div>
                <button type="submit" className="btn btn-primary btn-block">Создать</button>
                </div>
            </form >
            </div>

            </div>

        )
    }
}