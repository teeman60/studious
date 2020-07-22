import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    
    render() { 
        let logout = () => {
            localStorage.clear()
        }
        return ( 
            <div>
                {/* <button onClick={this.logout}>Logout</button> */}
                
                <div>
                    {/* <Link to="/signup">Sign Up</Link> */}
                </div>
                <div>
                    {/* <Link to="/login">Login</Link> */}
                </div>
                <div id="header" className="hoc clear">
                    <button onClick={logout}>Logout</button>
                </div>
                {this.props.comm}
            </div>
         );
    }
}
 
export default NavBar;