const API_URL = process.env.REACT_APP_API_URL;

const setSellers = sellers => {
  return {
    type: 'GET_SELLERS_SUCCESS',
    sellers
  }
}

export const getSellers = (state = [],  action) => {
  return dispatch => {
    return fetch(`${API_URL}/sellers`)
      .then(response => response.json())
      .then(sellers => dispatch(setSellers(sellers)))
      .catch(error => console.log(error));
  }
}
