class Api::SellersController < ApplicationController
  def index
    sellers = Seller.all
    render json: sellers
  end

  def create
    seller = Seller.new(seller_params)
    if seller.save
      render json: seller
    else
      render json: { message: seller.errors }, status: 400
    end
  end

  private
  def seller_params
    params.fetch(:seller, {}).permit(:name, :location, :email)
  end
end
