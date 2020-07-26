import React, { Component, useState } from 'react';
import './card-style.css'
import Post from '../Post'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'
Modal.setAppElement('#root')



class Cards extends Component {


    constructor() {
        super()
        this.state = {
            content: "",
            new: [],
            show: false
        }
    }





    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
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

        .then(res => res.json())
        .then( newpost => {
            this.setState({
                new: newpost

            })
            localStorage.newpost_id = this.state.new.data.id
            // console.log(this.state.new.data.id)
            // this.props.history.push(`/posts/${this.state.new.data.id}`)
        })
            
        
        
    }


    

     goToLink = () => {
        // debugger
        if (this.props.link === "newpost") {
            this.showPostModal()
        } else if (this.props.link === "newappointment") {
            this.props.history.push('newappointment')
        }
        // 
         
    }


    showPostModal = () => {
        this.setState({ show: true });
    };

    
    hidePostModal = () => {
        this.setState({ show: false });
    };

      


    render() {
   
        

        return(
            <div className="card text-center shadow" style={{display: 'inline-grid'}}>
                <div className="overflow">
                    <img src={this.props.imgsrc} alt="image 1" className="card-img-top" />
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{this.props.title}</h4>
                    <p className="card-text text-secondary"> {this.props.about}</p>
                <button onClick={() => {this.goToLink()}} className="btn btn-outline-success">{this.props.button}</button>
                </div>

                {/* <button onClick={() => setModalIsOpen(true)}>create new</button> */}
                <Modal isOpen={this.state.show} style={{content:{color:'orange', width: '50%', position: 'fixed'}}}>
                    <form onSubmit={(e) => this.handleSubmit(e, this.state.content)}>
                        <label> Ask The Student Community:</label>
                        <textarea value={this.state.content} onChange={this.handleChange} />
                        <input type="submit" />
                    </form>
                    <button onClick={this.hidePostModal}>X</button>
                    <p><Link to="/postcollection" style={{position: 'center'}}>see all posts</Link></p>
                </Modal>

                {/* {this.state.new.length > 0 ? <Post newpost={this.state.content} />: null } */}
            </div>
        )
    }
    
}

export default Cards