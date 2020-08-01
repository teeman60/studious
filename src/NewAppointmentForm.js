import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import styled, { createGlobalStyle, css } from 'styled-components'
import Footer from './Footer';
import img from '../src/Assets/appointment_img.png'
import { Grid } from '@material-ui/core';



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
        debugger
        e.preventDefault()
        e.target.reset();
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
                
            })
        // console.log(this.state)
        alert("Appointment entry saved")

    }


    
    render() { 
        // console.log(this.props.skills)


        const GlobalStyle = createGlobalStyle``
        const sharedStyles = css``
        const StyledFormWrapper = styled.div``
        const StyledForm = styled.form``
        const StyledInput = styled.input``
        const StyledTextArea = styled.textarea``
        const StyledButton = styled.button``
        const StyledFieldset = styled.fieldset``
        const StyledError = styled.div``


        return ( 
            <div style={{ height: '50rem', backgroundImage: `url(${img})`}}>


                <NavBar history={this.props.history}/>
                <div >
                <form onSubmit={this.handleSubmit} style={{ marginTop: '5rem', marginLeft: '75rem', marginRight: '3rem'}}>
                    <label style={{color: 'brown', fontWeight: 'bold'}}>Select Skill</label>
                    <select onChange={this.handleChange} name="skill_title" >
                        {this.state.skills.map(sk => <option key={sk.id} value={sk.attributes.title} >{sk.attributes.title}</option>)}
                    </select>
                    <br></br>

                    <label style={{color: 'brown', fontWeight: 'bold'}}>Start Date</label>
                    <input type="date" placeholder="Start Date" name="start_date" onChange={this.handleChange} />
                    <br></br>

                    <label style={{color: 'brown', fontWeight: 'bold'}}>Prospective End Date</label>
                    <input type="date" placeholder="End Date" name="completion_date" onChange={this.handleChange} />
                    <br></br>

                    <label style={{color: 'brown', fontWeight: 'bold'}}>Max. Partners You Can Accommodate</label>
                    <input type="number" placeholder="Max. Partners" name="max_partners" onChange={this.handleChange} />
                    <br></br>
                    <input type="submit"/> 
                </form>

                </div>
                <br></br>
                <p style={{color: 'black', textAlign: 'right', marginRight: '3rem'}}>Not interested in any of these? check out our <Link to="/skills" style={{display: 'inline-grid'}}> skills hub</Link></p>
                
                    
                    
                    <Footer />

                    


            </div>
         );
    }
}





export default NewAppointmentForm;