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

                        


                <div style={{ textAlign: 'center', height: '50rem', backgroundImage: `url(" + 'https://cdn.wallpapersafari.com/65/38/Cd7UkJ.jpg' + ")`}}>  
                 
                    {/* <h2 style={{color: 'white'}}>Create An Account</h2> */}
                    <form onSubmit={(e) => this.signUp(e)} style={{display: 'inline-block', marginTop: '5rem'}} onReset={this.resetForm}>
                        <label style={{color: 'greenyellow', fontWeight: 'bold'}}>Username</label>
                        <input name="username" type="text" placeholder="Enter username" onChange={(e) => this.handleChange(e)}/>
                        <br></br>

                        <label style={{color: 'greenyellow', fontWeight: 'bold'}}>Password</label>
                        <input name="password" type="password" placeholder=" Enter password" onChange={(e) => this.handleChange(e)}/>
                        <br></br>

                        <label style={{color: 'greenyellow', fontWeight: 'bold'}}>Re-enter Password</label>
                        <input name="password" type="password" placeholder=" Enter password" onChange={(e) => this.handleChange(e)}/>
                        <br></br>

                        <input type="submit" style={{display: 'inline-block', color: 'green', marginTop: '0.5rem'}}></input>
                    </form><br></br>
                    <p>Already have an account? <Link to="/" style={{display: 'inline-grid', color: 'greenyellow'}}>go back to Login</Link></p>

                    <div ><br></br>
                    
                    </div>                 
             </div>
                                          

            </div>
         );
    }
}
 
export default SignUp;