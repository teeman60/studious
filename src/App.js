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
import NewPost from './NewPost';

class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoggedIn: true
    }
  }


  changeState = (e) => {
    debugger
    e.preventDefault()
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  //  in subsequent requests, send token for authorization:

  // getJobListing = () => {
  //   fetch('http://localhost:3000/jobs', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`
  //     }
  //   })
  //   .then(res => res.json())
  //   .then()
  // }


  // addUser = () => {
  //   debugger
  // }


  render () {
    return (
            
      <BrowserRouter>        
        <div >
          <NavBar />
          <Switch>
          <Route exact path="/login"
          render={(routeProps) => <Login {...routeProps}/>} changeState={this.changeState}/>
          
          <Route path="/users/:id"
          component={UserInfo}/>

          <Route exact path="/signup"
          render={(routeProps) => <SignUp {...routeProps}/>} changeState={this.changeState}/>

          
          <Skill />

          {/* <Route exact path="/signup"
          component={SignUp}/> */}


          {/* <Route exact path="/newappointment"
          render={(routeProps) => <NewAppointmentForm {...routeProps}/>} /> */}


          {/* <Route path="/newpost"
          render={(routeProps) => <NewPost {...routeProps}/>} /> */}

          {/* <Route exact path="/newpost"
          component={NewPost}/> */}


          {/* <Route path="/menu"
          render={(routeProps) => <Menu {...routeProps} showMenu={this.state.isLoggedIn}/>} /> */}
      
                
          </Switch>
        
        </div>
      </BrowserRouter>
      
    );
  }
  
}

export default App;
