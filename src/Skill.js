import React, { Component } from 'react';
import NewAppointmentForm from './NewAppointmentForm'
import Modal from 'react-modal'

class Skill extends Component {
    

    constructor() {
        super()
        this.state = {
            skills: [],
            displayForm: false
        }
    }


    componentWillMount() {
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
        this.setState({
            [e.target.name]: e.target.value
        })
    } 


    handleSubmit = (e) => {
        e.preventDefault()

        delete this.state['skills']
        let updated = this.state
        
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


    openNewSkillModal = () => {
        this.setState({
            displayForm: true
        })
    }


    closeNewSkillModal = () => {
        this.setState({
            displayForm: false
        })
    }



    render() { 
        // console.log(this.state.skills)
        return ( 
            
            <div>                
                <button>Add a new skill </button>
                <Modal isOpen = {this.state.displayForm}>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="title" placeholder="Proposed Title" onChange={this.handleChange} /><br></br>
                        <textarea type="text" name="about" placeholder="A little facts about this skill" onChange={this.handleChange}/><br></br>
                        <input type="text" name="resources" placeholder="Links about this skill you'd like to share" onChange={this.handleChange}/><br></br>
                        <input type="submit"/> 
                    </form>
                </Modal>

                {/* {this.state.skills.map(sk =>  {
                <h3>{sk.attributes.title}</h3>
                <p>{sk.attributes.about}</p>
                <p>{sk.attributes.resources}</p>})}  */}
            </div>
         );
    }
}
 
export default Skill;