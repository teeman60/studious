import React, { Component } from 'react';

import SignUp from './SignUp';
import Login from './Login';
import Menu from './Menu';
import UserInfo from './UserInfo';
import NewAppointmentForm from './NewAppointmentForm';
import Skill from './Skill';
import NewPost from './NewPost';
import PostCollection from './PostCollection'
import NewComment from './NewComment'
// import Chat from './Chat'
import Chat from './Chat_client/Chat.js'
import Header from './Header'

import { BrowserRouter, Route, Switch } from 'react-router-dom'


import './framework.css'
import './layout.css'





class App extends Component {


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


            <Route exact path={`/users/:id`}
            render={(routeProps) => <UserInfo {...routeProps}/>} user={this.state.user}/>
            

            <Route exact path="/postcollection"
            render={(routeProps) => <PostCollection {...routeProps}/>} />


            <Route exact path="/newappointment"
            render={(routeProps) => <NewAppointmentForm {...routeProps}/>} />


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
