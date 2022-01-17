import React, { Component } from "react";
import api from "../../API";
import DefProfile from "./DefProfile";
import BusProfile from "./BusProfile";

export default class ViewProfile extends Component {

    componentDidMount() {
        console.log('Component did mount!')
        api.defaults.headers.Authorization = localStorage.getItem('token');
        console.log(api.defaults.headers.Authorization);
        if (localStorage.getItem('role') === 'USER_BUSINESS') {
            console.log('user is business')
            api.get('users/profile/business')
                .then(resp => {
                    this.setState(resp.data);
                    console.log(this.state);
                })
        }
        else if (localStorage.getItem('role') === 'USER_DEFAULT') {
            console.log('user is default')
            api.get('users/profile/default')
                .then(resp => {
                    this.setState(resp.data);
                    console.log(this.state);
                })
        }
    }

    render() {
        if(this.state!=null){
        if (localStorage.getItem('role') === 'USER_DEFAULT')
            return <DefProfile value={this.state} />
        else if (localStorage.getItem('role') === 'USER_BUSINESS')
            return <BusProfile value={this.state}/>
        }else return <p>Error</p>
    }
}