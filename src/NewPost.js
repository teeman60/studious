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


    handleSubmit = () => {
        debugger
    }


    render() { 
       
        return ( 
            localStorage.token 
            ?
            <div>
                <form>
                    <label> Ask The Student Community:</label>
                    <textarea value={this.state.content} onChange={this.handleChange} />
                </form>
            </div>
            :
            <h4>You're not logged in!</h4>
         );
         
    }
}
 
export default NewPost;