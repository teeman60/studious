import React from 'react';

import Header from './Header'

import { Link } from 'react-router-dom'

import img from '../src/Assets/login.jpg'










class Login extends React.Component {
   
    constructor() {
        super()
          this.state = {
            user: [],
            username: "",
            password: "",
            isLoggedIn: false
        }
    }


    handleChange = (e) => {
       
        this.setState({
            [e.target.name]: e.target.value
        })  
             
    }

  

    login = (e) => {
        e.preventDefault()
        e.target.reset()
        
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
                    
        })
            .then(res => res.json())
            .then(UserInfo => {
              
                if (UserInfo.token) {
                    localStorage.token = UserInfo.token 
                    localStorage.user_id = UserInfo.id
                    localStorage.user_name = UserInfo.username
                    this.setState({isLoggedIn: true}) 
                    this.props.history.push("/menu") 
                } else {
                    alert("Invalid Username or password")
                }
                 
                
                
            })      
                  
    }


    resetForm = () => {
        this.setState({ username: '', password: '' })
    }


   


    render() { 

        return this.state.isLoggedIn ? (<div><Header logged = {this.state.isLoggedIn}/></div>) : (
                 
                <div style={{ textAlign: 'center', height: '50rem', backgroundImage: `url(${img})`}}>  
                 
                    
                    <form onSubmit={(e) => this.login(e)} style={{display: 'inline-block', marginTop: '5rem'}} onReset={this.resetForm}>
                        <label style={{color: 'greenyellow', fontWeight: 'bold'}}>Username</label>
                        <input name="username" type="text" placeholder="Enter username" onChange={(e) => this.handleChange(e)}/>
                        <br></br>
                        <label style={{color: 'greenyellow', fontWeight: 'bold'}}>Password</label>
                        <input name="password" type="password" placeholder=" Enter password" onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" style={{display: 'inline-block', color: 'green', marginTop: '0.5rem'}}></input>
                    </form><br></br>
                    <div ><br></br>
                        <p>Don't have an account? <Link to="/signup" style={{display: 'inline-grid', color: 'greenyellow'}}>create a new account</Link></p>
                    </div>                 
                </div>               
           
         );
    }
}
 
export default Login;