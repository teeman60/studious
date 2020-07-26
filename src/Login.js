import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import NavBar from './NavBar'
import Post from './Post'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';

class Login extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            user: [],
            username: "",
            password: ""
        }
    }


    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })  
             
    }

  

    login = (e) => {
        e.preventDefault()
        
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
                // debugger
                if (UserInfo.token) {
                    localStorage.token = UserInfo.token 
                    localStorage.user_id = UserInfo.id 
                    this.props.history.push("/menu") 
                } else {
                    alert("Invalid Username or password")
                }
                 
                // console.log(UserInfo)
                
            })      
                  
    }


    resetForm = () => {
        this.setState({ username: '', password: '' })
    }


   


    render() { 
        return (
                 
                <div className="fill-window" style={{textAlign: 'center', backgroundImage: "url(" + 'https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg' + ")"}}>  
                    <h2 style={{textAlign: 'center', color: 'indigo'}}>Welcome To Your Students Community</h2>       
                    
                    <form onSubmit={(e) => this.login(e)} style={{display: 'inline-block'}} onReset={this.resetForm}>
                        
                        <input name="username" type="text" placeholder="username" onChange={(e) => this.handleChange(e)}/>
                        <br></br>
                        <input name="password" type="password" placeholder="password" onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" style={{display: 'inline-block', color: 'green'}}></input>
                    </form><br></br>
                    <div >
                    <p>Don't have an account? <Link to="/signup" style={{display: 'inline-grid'}}>create a new account</Link></p>
                    </div>

                    
                    {/* <button onClick={this.handleChange}>Sign Up</button> */}
                    <NavBar history={this.props.history} />
                </div>
           
         );
    }
}
 
export default Login;