import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewComment from './NewComment'
// import NavBar from './NavBar';

class PostCollection extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            collection: [],
            comments: [],
            isClicked: false
            
        }
    }


    componentDidMount() {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then( posts => {
                // console.log(posts.data)
                this.setState({
                    collection: posts.data
                })
            })
    }


    toggleResolved = (post) => {
        // debugger
        
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                post
            })
        })
            .then(res => res.json())
            .then(posts => {
                let resolvedPost = posts.filter(p => p === post)
                resolvedPost.attributes['resolved?'] = !resolvedPost.attributes['resolved?']
            })
        
    }


    getComments = (p) => {
        // debugger

        this.props.history.push("/comment")
        
        // let filtered = this.state.collection.filter(p => p === post)
        // this.setState({
        //     comments: p.attributes.comments         
        // })
        // console.log(this.state.comments)

        // debugger
        // console.log(this.state.collection)
        // fetch('http://localhost:3000/posts') 
        // {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${localStorage.token}`
        //     },
        //     body: JSON.stringify(
        //         post
        //     )
        // }
        // .then(res => res.json())
        // .then( posts => {
        //     let aa = posts.data.filter(p => p.id === post.id)
        //     console.log(aa.attributes.comments)
        // })
    }


    increaseLikes = (post) => {

        // if (localStorage.token) {
        //     post.attributes.likes += 1
        // }

        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
                ++post.attributes.likes
            )
            
        })
            // .then(res => res.json())
            // .then( post => {
            //     console.log(post)
                
            // })
    }


    handleDelete = (post) => {
        // debugger
        if (localStorage.token) {
        let filtered = this.state.collection.filter(p => p !== post)
        this.setState({
            collection: filtered
        })}

        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify({
                post
            })
        })


    }



    render() { 
        return ( 
            <div>
                post collection
                {this.state.collection.map(post => 
                <div key={post.id}>{post.attributes.content}
                <button onClick={() => {this.increaseLikes(post)}}>like ❤️️</button>{post.attributes.likes}
                <button onClick={() => {this.handleDelete(post)}}>delete</button>
                <button onClick={() => {this.toggleResolved(post)}}>{post.attributes['resolved?']?"Resolved":"unresolved"}</button>
                <button onClick={() => this.getComments(post)}>comments</button>
                {post.attributes.comments.map()}
                {<Link to="/comment" comments={post.attributes.comments}>comments</Link>}
                
                </div>
                )}
                
            </div> 
         );
    }
}
 
export default PostCollection;