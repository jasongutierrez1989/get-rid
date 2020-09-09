import React, { Component } from 'react';
import { connect } from 'react-redux';
import SellerInfo from '../components/SellerInfo';
import { getSellers } from '../actions/sellers';
import SellerForm from './SellerForm';

class Sellers extends Component {

  componentDidMount() {
    this.props.getSellers()
  }

  render() {
    const sellers = this.props.sellers;
    return(
      <div className="seller-page">
            <div className="seller-info">
              <h1>Sellers List</h1>
            <div>
              <div className="seller-form">
              <SellerForm />
            </div>
            </div>
          </div>
            <div className="seller-section">
              <h3 className="seller-instructions">Click on a Seller items for sale!</h3>

              <div className="seller-section">
              <h3 className="seller-instructions">Check out all of these sellers!</h3>
              {(sellers || []).map(seller => <SellerInfo key={seller.id} seller={seller} />)}
            </div>
            <div className="show-seller" id="show-seller">
              {this.props.children}
            </div>
            </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
    sellers: state.sellers
  })
}

export default connect(mapStateToProps, { getSellers })(Sellers);
