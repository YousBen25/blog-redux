import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions/index';

// eslint-disable-next-line react/prefer-stateless-function
class PostsShow extends React.Component {
  componentWillMount() {
    if (!this.props.post) {
      this.props.fetchPost(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.post) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <div className="post-item">
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.content}</p>
        </div>
        <Link to="/">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  // how to access the existing props from the component ownProps
  // todo: state.posts.SEARCH (id from URLS)
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const post = state.posts.find(p => p.id === idFromUrl);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

