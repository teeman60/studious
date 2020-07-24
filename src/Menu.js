import React, { Component } from 'react';
import PostCollection from './PostCollection';
// import styled from 'styled-components';
// import styled, {ThemeProvider} from 'styled-components'
// import Others from './Cards/Others'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'

import img1 from '../src/Assets/question_hand.jpg'
import img2 from '../src//Assets/set_goals.jpg'
import img3 from '../src//Assets/forum_discussions.png'
import img4 from '../src/Assets/skills.jpg'


import Card from '../src/Cards/Cards'
import UserInfo from './UserInfo';



class Menu extends Component {
    // state = {  }


    constructor () {
        super()
        this.state = {
            user: []
        }
    }



    // componentDidMount() {
    //     fetch(`http://localhost:3000/users/${localStorage.user_id}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json',
    //             'Authorization': `Bearer ${localStorage.token}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(user => {
    //             this.setState({
    //                 user: [... this.state.user, user.data.attributes]
    //             })
                
    //             // {<UserInfo gty={user.data.attributes} />}
    //             console.log(user.data.attributes.username)
    //             console.log(this.state.user)
    //         })
            
    // }

    
    render() { 

        // console.log(this.props.history)
         
        return (
            
                <div style={{textAlign: 'center', backgroundImage: "url(" + 'https://www.ufv.ca/media/2015/headers/Safe-community-180714491.jpg' + ")"}}>
                   
                   <div >
                      
                   </div>

                  

                   <div >
                      
                   </div>
                   <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                    <div className="col-md-4" onClick={this.getUser}>
                        <Card imgsrc={img1} history={this.props.history} title="Ask The Community" button="Get Help" link="newpost" about="Have questions to ask the community? Everyone's here to help. Ask away!!!"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} history={this.props.history} title="Set A skill Aquisition Goal" button="Get Matched" link="newappointment" about="Do you have some skills you'd like to pick up but feel unmotivated to push through? Get matched with students with same quest as you and go through this phase together"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} history={this.props.history} title="Current Forum Discussions" button="Discussions" link="postcollection" about="Check out the different questions being asked by some members of our community. You can help answer some of these as well"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img4} history={this.props.history} title="Skills Section" button="Skills Hub" link="skills" about="Check out our skills section for a list of cool 21st century skills to have. Feel free to add yours if you have some other ones and we'll review them."/>
                    </div>
                    {/* <UserInfo user={this.state.user}/> */}
                </div>

            </div>

                               
                </div>
            
            
            
         );
    }
}
 
export default Menu;