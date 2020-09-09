class Api::SellersController < ApplicationController
  def index
    sellers = Seller.all
    render json: sellers
  end

  def create
    supplier = Supplier.new(supplier_params)
    if supplier.save
      render json: supplier
    else
      render json: { message: supplier.errors }, status: 400
    end
  end
end
