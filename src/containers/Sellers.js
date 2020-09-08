import React, { Component } from 'react';
import { connect } from 'react-redux';

import SellerInfo from '../components/SellerInfo';

class Sellers extends Component {



  render() {
    return(
      <div className="seller-page">
            <div className="seller-info">
              <h1>Sellers List</h1>
            <div>
            </div>
          </div>
            <div className="seller-section">
              <h3 className="seller-instructions">Click on a Seller items for sale!</h3>
              <SellerInfo />

            </div>
      </div>
    );
  }
}

export default Sellers;
