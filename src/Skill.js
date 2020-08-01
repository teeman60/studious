import React, { Component } from 'react';
import NewAppointmentForm from './NewAppointmentForm'
import NavBar from './NavBar'
import '../src/Cards/card-style.css'
import { Link } from 'react-router-dom'


import Modal from 'react-modal'
import Footer from './Footer';

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
        e.target.reset()
 
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
        .then(res => res.json())
        .then( newskill => {
            // console.log(newskill)
            this.setState({
                skills: [...this.state.skills, newskill.data]
            })
            // alert("Your entry has been recorded")
            this.closeNewSkillModal()
            this.props.history.push('skills')  
            
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
                <NavBar history={this.props.history}/>
                {/* <p><strong><Link to="/newappointment" style={{marginTop: '2rem', marginLeft: '40rem'}}>back to skill appointment</Link></strong></p> */}
                {/* <button className="skillbutton" onClick={this.openNewSkillModal} style={{marginLeft: '50%', marginTop: '5px'}}>Add a new skill </button> */}
                
                <Modal isOpen = {this.state.displayForm} style={{content:{color:'brown', width: '40%', height: '57%', backgroundColor: 'skyblue'}}}>
                    <form onSubmit={this.handleSubmit}>
                        <label><strong>New Skill Entry:</strong></label>
                        <input className="skilltitle" type="text" name="title" placeholder="Proposed Title" onChange={this.handleChange} /><br></br>
                        <textarea className="skilltextarea" type="text" name="about" placeholder="A little facts about this skill" onChange={this.handleChange}/><br></br>
                        <textarea className="skillresources" type="text" name="resources" placeholder="Links about this skill you'd like to share. Separate by comma" onChange={this.handleChange}/><br></br>
                        <input className="skillsubmit" type="submit"/> <i class="fas fa-plus-circle"></i>
                    </form>
                    <button className="button" onClick={this.closeNewSkillModal}>X</button>
                </Modal>
                <i className="fas fa-plus-circle" onClick={this.openNewSkillModal} style={{marginLeft: '97rem', marginTop: '5rem', color: 'red'}}></i>
                <br></br>
                <br></br>
                <div style={{marginLeft: '3rem', marginRight: '3rem'}}>
                {this.state.skills.map(sk =>  
                <div key={sk.id}>
                    {sk.attributes.title !== undefined ?
                    <h5>{sk.attributes.title}</h5> : <div></div>
                    }
                    
                    <p>{sk.attributes.about}</p>
                    {sk.attributes.resources !== null ?
                    <p>{sk.attributes.resources.split(", ").map(r => <li className="list-unstyled" key={r.id}><a href={r}>{r}</a></li>)}</p>
                    
                    : null }<br></br><br></br>
                </div>
                )}
                </div>
            {/* ruby is a good beginner-level programming language. It has an MVC-type structure and can provide both front and back end functionalities, although it's mostly used as a backend API server
            https://skillcrush.com/blog/13-ruby-rails/, https://www.codecademy.com/learn/learn-rails
            */}
            <Footer />
            </div>
         );
    }
}
 
export default Skill;