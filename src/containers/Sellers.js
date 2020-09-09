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
    const {sellers, match} = this.props;
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
              <h3 className="seller-instructions">Click on a seller to see their available inventory.</h3>

                {(sellers || []).map(seller => <SellerInfo key={seller.id} seller={seller} />)}
                <button onClick={() => console.log(this.props)}>Test</button>
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
  console.log(state.sellers)
  return ({
    sellers: state.sellers
  })
}

export default connect(mapStateToProps, { getSellers })(Sellers);
