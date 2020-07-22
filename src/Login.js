import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';

class Login extends Component {
    // state = {  }


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
                localStorage.token = UserInfo.token
            })

            this.props.history.push("/menu") 

    }


    render() { 
        return (
                 
                <div className="fill-window" style={{textAlign: 'center', backgroundImage: "url(" + 'https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg' + ")"}}>  
                    <h2 style={{textAlign: 'center', color: 'indigo'}}>Welcome To Your Students Community</h2>       
                    
                    <form onSubmit={(e) => this.login(e)} style={{display: 'inline-block'}}>
                        
                        <input name="username" type="text" placeholder="username" onChange={(e) => this.handleChange(e)}/>
                        <br></br>
                        <input name="password" type="password" placeholder="password" onChange={(e) => this.handleChange(e)}/>
                        <input type="submit" style={{display: 'inline-block', color: 'green'}}></input>
                    </form><br></br>
                    <div >
                    <p>Don't have an account? <Link to="/signup" style={{display: 'inline-grid'}}>create a new account</Link></p>
                    </div>
                    
                    {/* <button onClick={this.handleChange}>Sign Up</button> */}
                    
                </div>
           
         );
    }
}
 
export default Login;