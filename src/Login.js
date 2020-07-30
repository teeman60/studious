import React, { useState, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './SignUp';
import NavBar from './NavBar'
import Post from './Post'
import { Link } from 'react-router-dom'
import UserInfo from './UserInfo';
import loginImg from '../src/Assets/loginImg.png'
import img from '../src/Assets/login.jpg'
import Header from './Header'
// import './Login.scss'








class Login extends React.Component {
    // state = {  }

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
        // debugger
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
                // debugger
                if (UserInfo.token) {
                    localStorage.token = UserInfo.token 
                    localStorage.user_id = UserInfo.id
                    localStorage.user_name = UserInfo.username
                    this.setState({isLoggedIn: true}) 
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
        // const useStyles = makeStyles((theme) => ({
        //     root: {
        //       '& .MuiTextField-root': {
        //         margin: theme.spacing(1),
        //         width: '25ch',
        //       },
        //     },
            
        //   }
        //   ));

        //   const classes = useStyles();

          
        // https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg
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