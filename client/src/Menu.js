import React, { Component } from 'react';
import Footer from './Footer'

import {Link} from 'react-router-dom'

import img from '../src/Assets/menu.jpg'
import img1 from '../src/Assets/new_question_hand.png'
import img2 from '../src//Assets/set_goals.jpg'
import img3 from '../src//Assets/forum_discussions.png'
import img4 from '../src/Assets/skills.jpg'


import Modal from 'react-modal'



import Card from '../src/Cards/Cards'
import NavBar from './NavBar';

Modal.setAppElement('#root')




class Menu extends Component {

    constructor () {
        super()
        this.state = {
            user: []
        }
    }


    
    render() { 
         
        return localStorage.token !== undefined ? (
            <div>
                <NavBar history={this.props.history}/>
                <div style={{textAlign: 'center', backgroundImage: `url(${img})`}}>
                   
                   
                   <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                    {/* <Modal> */}
                    <div className="col-md-4 firstcard" onClick={this.getUser}>
                        <Card imgsrc={img1} history={this.props.history} title="Ask The Community" button="Get Help" link="newpost" about="Have questions to ask the community? Everyone's here to help. Ask away!!!"/>
                    </div>
                    {/* </Modal> */}
                    <div className="col-md-4 secondcard">
                        <Card imgsrc={img2} history={this.props.history} title="Set A skill Aquisition Goal" button="Get Matched" link="newappointment" about="Do you have some skills you'd like to pick up but feel unmotivated to push through? Get matched with students with same quest as you and go through this phase together"/>
                    </div>
                    <div className="col-md-4 thirdcard">
                        <Card imgsrc={img3} history={this.props.history} title="Current Forum Discussions" button="Discussions" link="postcollection" about="Check out the different questions being asked by some members of our community. You can help answer some of these as well"/>
                    </div>
                    <div className="col-md-4 fourthcard">
                        <Card imgsrc={img4} history={this.props.history} title="Skills Section" button="Skills Hub" link="skills" about="Check out our skills section for a list of cool 21st century skills to have. Feel free to add yours if you have some other ones and we'll review them."/>
                    </div>
                    
                  </div>

                 </div>

                
                    
                 <Footer />           
                </div>
                
            </div>
                       
         ):(<div>
            <h4>Please <Link to="/studious" style={{display: 'inline-grid'}}>Login</Link> First</h4>
            
         </div>)
        
    }
}
 
export default Menu;