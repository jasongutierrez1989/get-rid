const initialState = {
  name: '',
  location: '',
  email: ''
}

export default (state = initialState, action) => {

  switch(action.type) {
    case 'UPDATED_DATA':
      return action.sellerFormData;

    case 'RESET_SELLER_FORM':
      return initialState;

    default:
      return state;
  }
}
