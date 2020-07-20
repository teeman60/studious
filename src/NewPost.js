import React, { Component } from 'react';
import PostCollection from './PostCollection';

class NewPost extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            content: ""
            // oldPosts: []
        }
    }


    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }


    handleSubmit = (e) => {
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
    }


    render() { 
       
        return ( 
            
            localStorage.token 
            ?
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Ask The Student Community:</label>
                    <textarea value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                {/* <PostCollection newPost={this.state.content}/> */}
            </div>
            :
            <div>
            <h4>You're not logged in!</h4>
            </div>
            
         );
         
    }
}
 
export default NewPost;