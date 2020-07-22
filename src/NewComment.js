import React, { Component } from 'react';

class Comment extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            content: "",
            collection: [],
            commentsToPost: []            
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/comments')
            .then(res => res.json())
            .then( comments => {
                // console.log(comments.data)
                this.setState({
                    collection: comments.data
                })
            })
    }


    render() { 
        return ( 
            <div>
                new comment
                <form onSubmit={this.handleSubmit}>                    
                    <textarea placeholder="make a comment about this post" value={this.state.content} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <h3>comments to this post:</h3>
                {/* {this.props.c.content} */}

            </div>
         );
    }
}
 
export default Comment;