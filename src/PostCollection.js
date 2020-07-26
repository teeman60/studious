import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NewComment from './NewComment'
import Post from './Post';

class PostCollection extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            postCollection: [],
            postContent: [],
            // likes: 0,
            // resolved: true || false,
            comments: [],
            createdAt: ""
            
        }
    }


    componentWillMount() {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then( posts => {
                // console.log(posts.data)
                this.setState({
                    postCollection: posts.data
                })
            })
    }



    toggleResolved = (post) => {
        // debugger
        
        // localStorage.user_id === post.attributes.user_id       //saying I'm not authorized
        // ?

        fetch(`http://localhost:3000/posts/resolve/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(

                 post.attributes['resolved?'] = !post.attributes['resolved?']
            )

        })
            .then(res => res.json())
            .then(post => {
                this.setState({
                    // resolved: post.attributes['resolved?']   //how did this work?

                })
            })
            // :
            // alert("You're not authorized to change this")
        
    }


    getComments = (post) => {
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
            // debugger
        localStorage.token

        ?

        fetch(`http://localhost:3000/posts/like/${post.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            },
            body: JSON.stringify(
                ++post.attributes.likes
            )
            
        }
        )
            .then(res => res.json())
            .then( post => {
                // console.log(post)
                this.setState({
                    likes: post.data.attributes.likes
                })
            }
            
                
            )
            :
            alert("You're not logged in")
            
    }


    handleDelete = (post) => {
        // debugger

        // if (localStorage.user_id === post.attributes.user_id) {     #the condition is not working as should   
         
        this.setState({
            postCollection: this.state.postCollection.filter(p => p !== post)
        })
        // else {
        //     alert("You're not not authorized to delete this post")
        // }
         
        

        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
            
        })


    }



    render() { 
        return ( 
            <div>

                {this.state.postCollection.map((p, i) => 
                <Post key={i} post={p} handleDelete={this.handleDelete} increaseLikes={this.increaseLikes} toggleResolved={this.toggleResolved} getComments={this.getComments} />)}
                
                {/* <button onClick={this.posts}>get</button> */}
                <Link to="/menu" >menu</Link>
            </div> 
         );
    }
}
 
export default PostCollection;