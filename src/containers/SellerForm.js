import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSellerFormData } from '../actions/sellerForm';
import { createSeller } from '../actions/sellers';

class SellerForm extends Component {

  handleOnChange = event => {
    const { name, value } = event.target;
    const currentSellerFormData = Object.assign({}, this.props.sellerFormData, {
      [name]: value
    })
    this.props.updateSellerFormData(currentSellerFormData)
  }

  handleOnSubmit = event => {
    console.log(this)
    event.preventDefault()
    this.props.createSeller(this.props.sellerFormData)
  }

  render() {
    const { name, email, location } = this.props.sellerFormData;

    return (
      <div className="form">
        <h3 className="form-intro">Are you a seller? Are you new to Ugly Delicious?
        <br/>
        <br/>
        Welcome! Sign up here:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <fieldset>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="name"
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="location"
              value={email}
            />
          </div>
          <div>
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              onChange={this.handleOnChange}
              name="location"
              value={location}
            />
          </div>

          <button type="submit">Sign up</button>
        </fieldset>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sellerFormData: state.sellerFormData
  }
}

export default connect(mapStateToProps, {
  updateSellerFormData,
  createSeller
})(SellerForm);
