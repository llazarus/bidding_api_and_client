class Api::V1::UsersController < Api::ApplicationController
  before_action :authenticate_user!, only: [ :current ]
  
  def current
    render json: current_user
  end

  def create
    user = User.new user_params
    user.save!
    render json: auctions
  end

  private
  def auctions
    Auction.order created_at: :desc
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
