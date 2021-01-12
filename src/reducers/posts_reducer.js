import { FETCH_POSTS, FETCH_POST } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return [action.payload];
    // case POST_CREATED:
      // TODO: oush it to the array of posts
    default:
      return state;
  }
}
