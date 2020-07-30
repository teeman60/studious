import React, { Component } from 'react';
import PostCollection from './PostCollection';
import Post from './Post'
import '../src/Cards/card-style.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')


class NewPost extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            // content: "",
            new: []
            
        }
    }


    componentWillMount() {
        fetch(`http://localhost:3000/posts/${localStorage.newpost_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then(res => res.json())
            .then(post => {
                this.setState({
                    new: post.data.attributes
                })
                // console.log(this.state.new)
            })
    }


   


    render() { 
        // console.log(this.state.new)
        return ( 
            
            <div>
                <Modal isOpen={true} style={{content:{width: '50%', position: 'fixed'}}}>
                    {this.state.new.content}
                    {this.state.new.likes}
                    {this.state.new['resolved?']}
                    {this.state.new.created_at}
                    
                    
                </Modal>

            </div>
         );
         
    }
}
 
export default NewPost;