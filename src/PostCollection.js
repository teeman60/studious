import React, { Component } from 'react';

class PostCollection extends Component {
    // state = {  }

    constructor() {
        super()
        this.state = {
            collection: []
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
                {this.state.collection.map(post => <p key={post.id}>{post.attributes.content}<button onClick={() => {this.handleDelete(post)}}>delete</button><button>edit</button></p>)}
            </div>
         );
    }
}
 
export default PostCollection;