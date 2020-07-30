// import React from 'react';
import React, { Component, useState, useRef, useEffect } from 'react';

import SignUp from './SignUp';
import Login from './Login';
// import './App.css';
// import NavBar from './NavBar';
import Menu from './Menu';
import UserInfo from './UserInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewAppointmentForm from './NewAppointmentForm';
import Skill from './Skill';
import Appointment from './Appointment'
import NewPost from './NewPost';
// import Post from './Post';
import PostCollection from './PostCollection'
import NewComment from './NewComment'
import Chat from './Chat'
import Header from './Header'
// import './NewApp.scss'

import New from './New'

import {Link} from 'react-router-dom'
// import Card from '../Cards/Cards'
import './framework.css'
import './layout.css'
import Upload from './Upload'

// import io from 'socket.io-client'
// import styled from 'styled-components'





class App extends React.Component {


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
    // debugger
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









  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
  //       method: 'GET',
  //       headers: {
  //           'Content-Type': 'application/json',
  //           'Accept': 'application/json',
  //           'Authorization': `Bearer ${localStorage.token}`
  //       }
  //   })
  //       .then(res => res.json())
  //       .then(user => {
  //           this.setState({
  //               user: [... this.state.user, user.data.attributes]
  //           })
            
  //           // {<UserInfo gty={user.data.attributes} />}
  //           console.log(user.data.attributes.username)
  //           console.log(this.state.user)
  //       })
        
  // }



  changeState = (e) => {
    // debugger
    e.preventDefault()
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }


  render () {
    

    return (

      
       
            
        <div >

          <Header />
      <BrowserRouter> 
      
      
          <Switch>

               
          

          <Route exact path="/"
          render={(routeProps) => <Login {...routeProps}/>} changeState={this.changeState} handleChange={this.handleChange} login={this.login} resetForm={this.resetForm}/>

          <Route exact path="/signup"
          render={(routeProps) => <SignUp {...routeProps}/>} changeState={this.changeState}/>



          <Route exact path="/chatroom"
          render={(routeProps) => <Chat {...routeProps}/>} changeState={this.changeState}/>


          <Route exact path="/skills"
          render={(routeProps) => <Skill {...routeProps}/>}/>


          <Route exact path="/new"
          render={(routeProps) => <New {...routeProps}/>}/>
          
          


          <Route exact path={`/users/:id`}
          render={(routeProps) => <UserInfo {...routeProps}/>} user={this.state.user}/>

          

          <Route exact path="/postcollection"
          render={(routeProps) => <PostCollection {...routeProps}/>} />


          <Route exact path="/appointments"
          render={(routeProps) => <Appointment {...routeProps}/>} />

          <Route exact path="/newappointment"
          render={(routeProps) => <NewAppointmentForm {...routeProps}/>} />


          <Route exact path="/upload"
          render={(routeProps) => <Upload {...routeProps}/>} />

          <Route exact path="/comment"
          render={(routeProps) => <NewComment {...routeProps}/>} />


          <Route exact path={'/posts/:id'}
          render={(routeProps) => <NewPost {...routeProps}/>} />

          
           

          <Route exact path="/menu"
          render={(routeProps) => <Menu {...routeProps} />} />
      
                
          </Switch>

          

      </BrowserRouter>
         
        </div>
      
      
    );
  }
  
}

export default App;
