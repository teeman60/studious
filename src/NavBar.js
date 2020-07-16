import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    // state = {  }

    


    render() { 
        let logout = () => {
            localStorage.clear()
        }
        return ( 
            <div>
                {/* <button onClick={this.logout}>Logout</button> */}
                <h3>Welcome To Better Students</h3>
                <div>
                    <Link to="/signup">Sign Up</Link>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                </div>
                <div>
                    <button onClick={logout}>Logout</button>
                </div>

            </div>
         );
    }
}
 
export default NavBar;