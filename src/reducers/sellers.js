

function sellersReducer (state, action) {

  switch(action.type) {
    case 'GET_SELLERS_SUCCESS':
      return action.sellers,
      console.log(action.sellers);

    default:
      return {
        ...state
      }
  }
}

export default sellersReducer;
