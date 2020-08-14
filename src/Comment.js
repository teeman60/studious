import React, { Component } from 'react';

class Comment extends Component {
    
    render() { 
        console.log(this.props.comment)
        console.log(this.props.number)
        return ( 
            <div>
                <h6>{this.props.number} {this.props.number > 1 ? "comments" : "comment"}</h6>
                <div>
                    comment content
                </div>

                <div>
                    comment likes
                </div>

                <div>
                    comment created_at
                </div>
            </div>
         );
    }
}
 
export default Comment;