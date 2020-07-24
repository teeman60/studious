import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class SignUp extends Component {
    

    handleChange = (e) => {
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        }) 
               
    }


    signUp = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
            
        })
            // .then(res => res.json())
            // .then(console.log)
            alert("New Account Created")
            this.props.history.push("/")
    }


    render() { 
        return ( 

            <div>
                <h2>Signup</h2>
                <form onSubmit={(e) => this.signUp(e)}>
                    <label>UserName</label>
                    <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
                    <label>Password</label>
                    <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
                    <label>Password Confirmation</label>
                    <input name="confirm_password" type="password" onChange={(e) => this.handleChange(e)}/>
                    <input type="submit" />
                </form>

            </div>
         );
    }
}
 
export default SignUp;