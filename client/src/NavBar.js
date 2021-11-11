import React, { Component } from 'react';

import styled from 'styled-components'
import './Cards/card-style.css'
import { MDBIcon} from 'mdbreact'


import logo from './Assets/transp_img.png'

class NavBar extends Component {



    constructor() {
        super()
        this.state = {
            user: []
        }
    }



    componentWillMount() {
        fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(user => {
                this.setState({
                    // user: [... this.state.user, user.data.attributes]
                })
                
                
            })
            
    }


    getUser = (user_id) => {
        this.props.history.push(`/users/${user_id}`)
    }


    logout = () => {
        localStorage.clear()
        this.props.history.push('/studious')
        
    }


  


    
    render() { 


            return  (             
            
                <NavbarContainer>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
                        <img src={logo} alt="logo" style={{height:30, width:50}}/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto" style={{fontWeight: 'bold'}}>
                                <li className="nav-item active" >
                                    <a className="nav-link" href="http://localhost:3001/menu">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="http://localhost:3001/newappointment">Get Matched</a>
                                </li> 
                                <li className="nav-item dropdown"> 
                                    <a className="nav-link dropdown-toggle" href="http://localhost:3001/menu" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Menu
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="http://localhost:3001/menu">Ask A Question</a>
                                        <a className="dropdown-item" href="http://localhost:3001/newappointment">Another action</a>
                                        <div className="dropdown-divider" />
                                        {/* <a className="dropdown-item" href="#">Something else here</a> */}
                                    </div>
                                </li>
                               
                                <li className="nav-item" style={{fontStyle: 'italic', color: '#FF0000'}}>
                                    <a className="nav-link" style={{color: 'brown'}} href="http://localhost:3001/studious">Logout</a>
                                </li> 
                            </ul>

                            <MDBIcon onClick={() => {this.getUser(localStorage.user_id)}} style={{marginRight: '2rem'}} size="lg" icon="user-circle" />
                            
                        </div>
                    </nav>                

    
                    </NavbarContainer>                
             ) 
            }
        

        
         
            
}
 
export default NavBar;



const NavbarContainer = styled.div`
background: var(--dark-green) !important;

`;