import React, {Component} from 'react';

class Post extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div >
        <h3>{this.props.title}</h3>
        <div>{this.props.description}</div>
        <br />
        <p className="small">Id:‌ {this.props.author}</p>
      </div>
    )
  }
}

export default Post;