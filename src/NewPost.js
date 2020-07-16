import React, { Component } from 'react';

class NewPost extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            content: ""
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
                Authorization: `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
                this.state
            )
        })
            .then(res => res.json())
            .then(newPost => {
                console.log(newPost)
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
            </div>
            :
            <div>
            <h4>You're not logged in!</h4>
            </div>
            
         );
         
    }
}
 
export default NewPost;