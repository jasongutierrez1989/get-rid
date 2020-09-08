import React from 'react';
import { Link } from 'react-router-dom';


const SellerInfo = ({ seller }) =>
  <div key={seller.id} id="seller-card">
    <p><strong>Name:</strong> {seller.name}</p>
    <p><strong>Location:</strong> {seller.location}</p>
  </div>


export default SellerInfo;
