import React, { Component } from 'react';
import Comment from './Comment'
import {Link} from 'react-router-dom'

class Post extends Component {
    // state = {  }


   


    
    render() { 
        // console.log(this.props.new)
        return ( 
            <div>

                
                {/* <div>
                    {this.props.post.attributes.content}
                </div>

                <div>
                <button onClick={() => this.props.increaseLikes(this.props.post)}>like ❤️️</button>{this.props.post.attributes.likes}
                </div>
                <p><Link to={`/post/${this.props.post.id}`} style={{display: 'inline-grid'}}>{this.props.post.attributes.comments.length} {this.props.post.attributes.comments.length > 1 ? "comments" : "comment"}</Link></p>

                <div>
                    <button onClick={() => this.props.toggleResolved(this.props.post)}>{this.props.post.attributes['resolved?']?"Resolved":"Unresolved"}</button>
                </div>

                <div>
                    {this.props.post.attributes.created_at.toLocaleString() }     {/* convert to better time format */}     
                
                {/* </div> */}
                {/* <button onClick={() => {this.props.handleDelete(this.props.post)}}>delete</button>
                
                <br></br>  */}

                <textarea name="comment" type="text" placeholder="respond to this post" onChange={this.handleChange} />
                <button >comment</button>

                <p> <Link to="/postcollection" style={{display: 'inline-grid'}}>all discussions</Link></p>


                <Link to="http://localhost:3002" >chat</Link>

            </div>
         );
    }
}
 
export default Post;