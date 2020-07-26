import React, { Component } from 'react';
import { Link } from 'react-router-dom'


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
        // console.log(e)
    }


    handleSubmit = (e) => {
        e.preventDefault()
        delete this.state['skills']
        let updated = this.state
        fetch('http://localhost:3000/appointments', {
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
            .then(res => res.json())
            .then(na => {
                console.log(na)
            })
        // console.log(this.state)

    }


    
    render() { 
        // console.log(this.props.skills)
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} >
                    <select onChange={this.handleChange} name="skill_title" >
                        {this.state.skills.map(sk => <option key={sk.id} value={sk.attributes.title} >{sk.attributes.title}</option>)}
                    </select>

                    {/* <select onChange={this.handleChange} name="skill_id" value={this.state.name}>
                        <option value="Programming with Python">"Programming with Python"</option>
                        <option value="Basics of Redux">"Basics of Redux"</option>
                        <option value="MySQL Fundamentals">"MySQL Fundamentals"</option>
                        <option value="Mobile Application Programming With React-Native">"Mobile Application Programming With React-Native"</option>
                        <option value="JavaScript Frameworks">"JavaScript Frameworks"</option>
                    </select> */}


                    <input type="date" placeholder="Start Date" name="start_date" onChange={this.handleChange} />
                    <input type="date" placeholder="End Date" name="completion_date" onChange={this.handleChange} />
                    <input type="number" placeholder="Max. Partners" name="max_partners" onChange={this.handleChange} />
                    <input type="submit"/> 
                </form>
                <br></br>
                <p>Not interested in any of these? check out our <Link to="/skills" style={{display: 'inline-grid'}}> skills hub</Link></p>

            </div>
         );
    }
}





export default NewAppointmentForm;