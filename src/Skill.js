import React, { Component } from 'react';
import NewAppointmentForm from './NewAppointmentForm'

class Skill extends Component {
    // state = {  }

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
            console.log(this.state.skills)
            })
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 


    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(Object.filter(this.state, ele => ele.key === "skills"))
        // .omit(this.state, "skills")
        delete this.state['skills']
        let updated = this.state
        // console.log(updated)
        fetch('http://localhost:3000/skills', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
                updated
            )
        })

    }



    render() { 
        return ( 
            <div>
                <NewAppointmentForm skills={this.state.skills} /> <br></br>
                <h3>Add a skill you feel you'd like to learn</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Proposed Title" onChange={this.handleChange} /><br></br>
                    <textarea type="text" name="about" placeholder="A little facts about this skill" onChange={this.handleChange}/><br></br>
                    <input type="text" name="resources" placeholder="Links about this skill you'd like to share" onChange={this.handleChange}/><br></br>
                    <input type="submit"/> 
                </form>
            </div>
         );
    }
}
 
export default Skill;