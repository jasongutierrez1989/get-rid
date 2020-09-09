import { resetSellerForm } from './sellerForm';

const API_URL = process.env.REACT_APP_API_URL;

const setSellers = sellers => {
  return {
    type: 'GET_SELLERS_SUCCESS',
    sellers
  }
}

export const getSellers = () => {
  return dispatch => {
    return fetch(`${API_URL}/sellers`)
      .then(response => response.json())
      .then(sellers => dispatch(setSellers(sellers)))
      .catch(error => console.log(error));
  }
}

const addSeller = seller => {
  return {
    type: 'CREATE_SELLER_SUCCESS',
    seller: Object.assign({}, seller)
  }
}

export const createSeller = seller => {
  return dispatch => {
    return fetch(`${API_URL}/sellers`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ seller: seller })
    })
      .then(response => response.json())
      .then(seller => {
        dispatch(addSeller(seller))
        dispatch(resetSellerForm())
      })
      .catch(error => console.log(error))
  }
}
