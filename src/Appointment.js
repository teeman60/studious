import React, { Component } from 'react';

class Appointment extends Component {
    // state = {  }


    constructor() {
        super()
        this.state = {
            appointments: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/appointments',
        {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.token}`,
                // Accept: 'application/json'
            }
        })
            .then(res => res.json())
            .then( apps => {
                // users.data.
                this.setState({
                    appointments: apps.data
                })
                console.log(this.state)

            })
    }


    render() { 
        return ( 
            <div>
                <h4> Your Appointment </h4>
                {this.state.appointments.map(app => app.attributes.user_id)}
            </div>
         );
    }
}
 
export default Appointment;