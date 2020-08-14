import React, { Component } from 'react';
import Post from './Post';
import './Cards/card-style.css'
import NavBar from './NavBar';
import Footer from './Footer'


class PostCollection extends Component {
    
    constructor() {
        super()
        this.state = {
            postCollection: [],
            postContent: [],
            likes: 0,
            comments: [],
            createdAt: ""
            
        }
    }


    componentWillMount() {
        fetch('http://localhost:3000/posts')
            .then(res => res.json())
            .then( posts => {
                this.setState({
                    postCollection: posts.data
                })
            })
    }



    toggleResolved = (post) => {
        // debugger

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

                })
            })
           
        
    }


    getComments = (post) => {
        // debugger
        this.props.history.push("/comment")
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
        this.setState({
            postCollection: this.state.postCollection.filter(p => p !== post)
        })
        fetch(`http://localhost:3000/posts/${post.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.token}`
            }
            
        })


    }



    render() { 
        return ( 
            <div style={{backgroundColor: 'purple'}}>
                <NavBar history={this.props.history}/>

                {this.state.postCollection.map((p, i) => 
                <Post key={i} post={p} handleDelete={this.handleDelete} increaseLikes={this.increaseLikes} toggleResolved={this.toggleResolved} getComments={this.getComments} />)}
                {/* {props.post.attributes.comments.map((c, i) => <p key={i}>{c}</p>)} */}
                <Footer />
            </div> 
         );
    }
}
 
export default PostCollection;