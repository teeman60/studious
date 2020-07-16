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
                let att = data.data.map(hash => hash.attributes)
                this.setState({
                    skills: att
            })
            console.log(this.state.skills)
            })
    }



    render() { 
        return ( 
            <div>
                <NewAppointmentForm skills={this.state.skills} />
            </div>
         );
    }
}
 
export default Skill;