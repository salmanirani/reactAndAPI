import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Post from './components/Post';




class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      posts:[],
     
    
    }
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      response=>{
        this.setState({posts : response.data})
        // console.log(response.data)

      }
    )
  }
 

  
 
  render(){
    const posts = this.state.posts.map(post => {
      return <Post title={post.title}  description={post.body}
      author={post.id} key={post.id}></Post>
    })
    return ( 
      <div className="App">
        <div className='row'>
            <div className='ui container'>
            
           React app
           {posts}
            </div>
    
        </div>
      
  </div>
    );
  }
}

export default App;
