import React, { Component } from 'react';
import PostCollection from './PostCollection';
import Post from './Post'

class NewPost extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            content: "",
            new: "decent"
            
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

        .then(res => res.json())
        .then(newpost => {
            this.setState({
                new: [...this.state.new, newpost]
            })
        })
        this.props.history.push(`/posts/${this.state.new.id}`)
    }


    render() { 
       console.log(this.state.new)
        return ( 
            
            localStorage.token 
            ?
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label> Ask The Student Community:</label>
                    <textarea value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                {/* <Post new={this.state.new}/> */}
            </div>
            :
            <div>
            <h4>You're not logged in!</h4>
            </div>
            
         );
         
    }
}
 
export default NewPost;