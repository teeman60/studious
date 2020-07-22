import React, { Component } from 'react';

class NewAppointmentForm extends Component {



    constructor() {
        super()
        this.state = {
            skills: []
        }
    }



    componentDidMount() {
        fetch('http://localhost:3000/skills')
            .then(res => res.json())
            .then( data => {
                let att = data.data
                this.setState({
                    skills: att
            })
            // console.log(this.state.skills)
            })
    }



    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
                this.state
            )
        })
        console.log(this.state)
    }


    
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="skill" onChange={this.handleChange}>
                        {this.state.skills.map(sk => <option key={sk.id} name={sk.attributes.title}>{sk.attributes.title}</option>)}
                    </select>
                    <input type="date" placeholder="Start Date" name="start_date" onChange={this.handleChange}/>
                    <input type="date" placeholder="End Date" name="completion_date" onChange={this.handleChange}/>
                    <input type="number" placeholder="Max. Partners" name="max_partners" onChange={this.handleChange}/>
                    <input type="submit"/> 
                </form>
            </div>
         );
    }
}





export default NewAppointmentForm;