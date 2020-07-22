// import React from 'react';
import React, { Component } from 'react';
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
import PostCollection from './PostCollection'
import NewComment from './NewComment'
// import Card from '../Cards/Cards'
import './framework.css'
import './layout.css'





class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }


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
        <div >
          {/* <NavBar /> */}
          <Switch>
          <Route exact path="/login"
          render={(routeProps) => <Login {...routeProps}/>} changeState={this.changeState} />
          
          {/* <Route path="/users/:id"
          component={UserInfo}/> */}

          <Route exact path="/signup"
          render={(routeProps) => <SignUp {...routeProps}/>} changeState={this.changeState}/>


          <Route exact path="/skills"
          render={(routeProps) => <Skill {...routeProps}/>}/>


          <Route exact path="/nav"
          render={(routeProps) => <NavBar {...routeProps}/>}/>


          

          <Route exact path="/postcollection"
          render={(routeProps) => <PostCollection {...routeProps}/>} />


          <Route exact path="/appointments"
          render={(routeProps) => <Appointment {...routeProps}/>} />

          <Route exact path="/newappointment"
          render={(routeProps) => <NewAppointmentForm {...routeProps}/>} />


          <Route exact path="/post"
          render={(routeProps) => <NewPost {...routeProps}/>} />

          <Route exact path="/comment"
          render={(routeProps) => <NewComment {...routeProps}/>} />

          {/* <Route exact path="/newpost"
          component={NewPost}/> */}

          {/* <Route exact path="/card"
          render={(routeProps) => <Card {...routeProps}/>} /> */}


          <Route exact path="/menu"
          render={(routeProps) => <Menu {...routeProps} />} />
      
                
          </Switch>
        
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
