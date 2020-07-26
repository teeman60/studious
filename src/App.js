// import React from 'react';
import React, { Component, useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import SignUp from './SignUp';
import Login from './Login';
import './App.css';
import NavBar from './NavBar';
import Menu from './Menu';
import UserInfo from './UserInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NewAppointmentForm from './NewAppointmentForm';
import Skill from './Skill';
import Appointment from './Appointment'
import NewPost from './NewPost';
import Post from './Post';
import PostCollection from './PostCollection'
import NewComment from './NewComment'
import Chat from './Chat'
import {Link} from 'react-router-dom'
// import Card from '../Cards/Cards'
import './framework.css'
import './layout.css'
import Upload from './Upload'

// import io from 'socket.io-client'
// import styled from 'styled-components'





class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true,
      user: []
    }
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

      
       
      <BrowserRouter> 
         <NavBar /> 
            
        <div >
        
          
          <Switch>

{/* 
          <Route exact path="/nav"
          render={(routeProps) => <NavBar {...routeProps} />} /> */}
          
          

          <Route exact path="/"
          render={(routeProps) => <Login {...routeProps}/>} changeState={this.changeState} />

          <Route exact path="/signup"
          render={(routeProps) => <SignUp {...routeProps}/>} changeState={this.changeState}/>



          <Route exact path="/chat"
          render={(routeProps) => <Chat {...routeProps}/>} changeState={this.changeState}/>


          <Route exact path="/skills"
          render={(routeProps) => <Skill {...routeProps}/>}/>
          


          <Route exact path="/user"
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


          <Route exact path={`/posts/:id`}
          render={(routeProps) => <NewPost {...routeProps}/>} />

          {/* <Route exact path="/newpost"
          component={NewPost}/> */}


          <Route exact path="/menu"
          render={(routeProps) => <Menu {...routeProps} />} />
      
                
          </Switch>
        
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
