import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from 'C:\\Users\\Syed\\Documents\\blog2React\\ReduxSimpleStarter\\src\\actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {



  componentDidMount(){
    //if(!this.props.post){}
    const{ id } = this.props.match.params;//params is wildcard from route
    console.log("id in mount " + id);
    this.props.fetchPost(id);
  }


  onDeleteClick(){
    const {id } = this.props.match.params;

    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render(){
    console.log("props = " + this.props.post);
    const { post } = this.props;
    if(!post){
      return <div>Loading...</div>;
    }
    return (
      <div>
      <Link to="/">Back to Index </Link>
      <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
      > Delete Post
      </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  };
}

function mapStatetoProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };

}

export default connect(mapStatetoProps, { fetchPost, deletePost })(PostsShow);
