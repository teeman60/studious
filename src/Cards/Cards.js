import React, { Component} from 'react';
import './card-style.css'

import {Link} from 'react-router-dom'

import Modal from 'react-modal'
Modal.setAppElement('#root')



class Cards extends Component {


    constructor() {
        super()
        this.state = {
            content: "",
            // new: [],
            showpost: false
        }
    }



    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset();
        this.setState({
            content: ""
        })
        // debugger
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                content: this.state.content
            })
        }) 
        this.hidePostModal()
          
        
    }


    

     goToLink = () => {
        // debugger
        if (this.props.link === "newpost") {
            this.showPostModal()
        } else if (this.props.link === "newappointment") {
            this.props.history.push('newappointment')
        } else if (this.props.link === "postcollection") {
            this.props.history.push('postcollection')
        } else {
            this.props.history.push('skills')
        }
        
         
    }


    showPostModal = () => {
        this.setState({ showpost: true });
    };

    
    hidePostModal = () => {
        this.setState({ showpost: false });
    };

      


    render() {        

        return(
            <div className="card text-center shadow" style={{display: 'inline-grid'}}>
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="first 1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text text-secondary"> {this.props.about}</p>
                    <button onClick={() => {this.goToLink()}} className="btn btn-outline-success">{this.props.button}</button>
                </div>

                <Modal isOpen={this.state.showpost} style={{content:{color:'greenyellow', width: '30%', height: '35%', backgroundColor: 'skyblue', backgroundImage: `url(" + 'https://all4desktop.com/data_images/original/4235894-cool-background.jpg' + ")`}}}>
                    <form onSubmit={(e) => this.handleSubmit(e, this.state.content)}>
                        <label><strong>Ask The Student Community:</strong></label>
                                   
                        <textarea className="textarea" style={{backgroundColor: 'grey'}} value={this.state.content} onChange={this.handleChange} />
                        <input style={{backgroundColor: '#5b22df', color: 'white'}} type="submit" className="submit"/>
                    </form>
                    <button className="button" onClick={this.hidePostModal}>X</button>
                    <p className="seeall"><strong><Link to="/postcollection" style={{position: 'center', color: 'greenyellow'}}>see all posts</Link></strong></p>
                </Modal>
            </div>
        )
    }
    
}

export default Cards