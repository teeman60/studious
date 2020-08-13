import React, { Component } from 'react';
import '../src/Cards/card-style.css'
import Modal from 'react-modal'

Modal.setAppElement('#root')


class NewPost extends Component {
    
    constructor() {
        super()
        this.state = {
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
               
            })
    }


   


    render() { 
   
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