import React, { Component } from 'react';
import { connect } from 'react-redux';
import SellerInfo from '../components/SellerInfo';
import { getSellers } from '../actions/sellers';
import SellerForm from './SellerForm';
import './sellers.styles.css';

class Sellers extends Component {

  componentDidMount() {
    this.props.getSellers()
  }

  render() {
    const sellers = this.props.sellers;
    return(
      <div className="seller-page">
        <div className="seller-info">
          <h1>Providers List</h1>
        </div>
        <div className="seller-section">
          <div className="seller-section">
            <h3 className="seller-instructions">Contact a coach today!</h3>
            <div className='sellers-list'>
              {(sellers || []).map(seller => <SellerInfo key={seller.id} seller={seller} />)}
              </div>
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
