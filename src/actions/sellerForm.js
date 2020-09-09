export const updateSellerFormData = sellerFormData => {
  return {
    type: 'UPDATED_DATA',
    sellerFormData
  }
}

export const resetSellerForm = () => {
  return {
    type: 'RESET_SELLER_FORM'
  }
}
