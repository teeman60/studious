import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';

import logo from '../src/Assets/transp_img.png'

class NavBar extends Component {



    constructor() {
        super()
        this.state = {
            user: []
        }
    }



    componentDidMount() {
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


    getUser = () => {
        console.log(this.state.user)
        // <Link to="/chat" >chatroom</Link>
        // {<UserInfo user={this.state.user}/>}
        this.props.history.push('/user')
    }


    logout = () => {
        localStorage.clear()
        this.props.history.push('/')
        
    }


  


    
    render() { 
        

        // console.log(this.props.history)
        if (localStorage.token ) {
            return  (             
            
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <img src={logo} alt="logo" style={{height:30, width:50}}/>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="http://localhost:3001/menu">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link disabled" onClick={this.logout} tabIndex={-1} aria-disabled="true">Logout</button>
                                </li>
                            </ul>
             
                            <button className="btn btn-outline-success my-1 my-sm-0" onClick={this.logout} type="submit">Profile</button>
                        </div>
                    </nav>                
                        
                        {/* profile */}
                        {/* logout  */}
    
                    </div>                
             ) 
            }
            else {
                return (<div></div>)
             }
        }

        
         
            
}
 
export default NavBar;