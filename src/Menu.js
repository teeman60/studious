import React, { Component } from 'react';
import PostCollection from './PostCollection';
// import styled from 'styled-components';
// import styled, {ThemeProvider} from 'styled-components'
// import Others from './Cards/Others'

import img1 from '../src/Assets/question_hand.jpg'
import img2 from '../src//Assets/set_goals.jpg'
import img3 from '../src//Assets/forum_discussions.png'
import img4 from '../src/Assets/skills.jpg'


import Card from '../src/Cards/Cards'



class Menu extends Component {
    // state = {  }

    
    render() { 
         
        return (
            
                <div style={{textAlign: 'center', backgroundImage: "url(" + 'https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg' + ")"}}>
                   
                   <div >
                      
                   </div>

                   {/* <div >
                       <button className="btn">
                            Ask The Community
                       </button> 
                       <div className="divider" />
                       <button className="btn" onClick={() => this.props.history.push('/newappointment')}>
                           Set A skill Aquisition Goal
                       </button>
                       <div className="divider" />
                       <button className="btn" onClick={() => this.props.history.push('/postcollection')}>
                           Current Forum Discussions
   

                       </button>
                       <div className="divider" />
                       <button className="btn" onClick={() => this.props.history.push('/skills')}>
                           Skills Section
                       </button>
                      
                   </div> */}

                   <div >
                      
                   </div>
                   <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img1} title="Ask The Community" button="Get Help" link="post"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title="Set A skill Aquisition Goal" button="Get Matched"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title="Current Forum Discussions" button="Past & Current"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} title="Skills Section" button="Skills Hub" />
                    </div>
                </div>

            </div>

                               
                </div>
            
            
            
         );
    }
}
 
export default Menu;