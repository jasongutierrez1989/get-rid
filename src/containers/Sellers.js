import React, { Component } from 'react';
import { connect } from 'react-redux';
import SellerInfo from '../components/SellerInfo';
import { getSellers } from '../actions/sellers';

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
            </div>
          </div>
            <div className="seller-section">
              <h3 className="seller-instructions">Click on a Seller items for sale!</h3>

              <div className="seller-section">
              <h3 className="seller-instructions">Click on a seller to see their available inventory.</h3>

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
  return ({
    sellers: state
  })
}

export default connect(mapStateToProps, { getSellers })(Sellers);
