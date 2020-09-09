

function sellersReducer (state, action) {

  switch(action.type) {
    case 'GET_SELLERS_SUCCESS':
      return action.sellers;

    case 'CREATE_SELLER_SUCCESS':
      return state.concat(action.seller);

    default:
      return {
        ...state
      }
  }
}

export default sellersReducer;
