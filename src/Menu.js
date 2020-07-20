import React, { Component } from 'react';
// import styled from 'styled-components';
// import styled, {ThemeProvider} from 'styled-components'

// import './layout.css'

class Menu extends Component {
    // state = {  }

    
    render() { 
         
        return (
            // localStorage.token
            // ? 
                <div style={{textAlign: 'center', backgroundImage: "url(" + 'https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg' + ")"}}>
                   {/* app logo (center), user profile (right) */}
                   <div >
                      
                   </div>

                   <div >
                       <button className="btn">
                            Ask The Community
                       </button> 
                       <div className="divider" />
                       <button className="btn">
                           Get Matched For Skill Acquisition
                       </button>
                       <div className="divider" />
                       <button className="btn">
                           Current Forum Discussions
                       </button>
                       <div className="divider" />
                       <button className="btn">
                           Skills Section
                       </button>
                      
                   </div>

                   <div >
                      
                   </div>

                               
                </div>
            
            
            // : null
         );
    }
}
 
export default Menu;