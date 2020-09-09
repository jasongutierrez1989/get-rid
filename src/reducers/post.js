function postReducer(state = [], action) {
  switch (action.type) {

    case 'GET_POST_SUCCESS':
      return action.post;

    default:
      return state;
  }
}

export default postReducer;
