import React, { Component } from 'react';

import NavBar from './NavBar'

import Modal from 'react-modal'
import Footer from './Footer';

import '../src/Cards/card-style.css'

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
            
            this.setState({
                skills: [...this.state.skills, newskill.data]
            })
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
       
        return ( 
            
            <div> 
                <NavBar history={this.props.history}/>
                
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
            <Footer />
            </div>
         );
    }
}
 
export default Skill;