class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!
  before_action :find_auction
  before_action :authorize_user!

  def create
    bid = Bid.new 
    bid.bid_value = params["bid_value"]
    bid.auction_id = params["auction_id"]
    bid.user_id = current_user.id
    bid.save!
    render json: { status: :success }
  end

  private 
  def bid_params
    params.require(:bid).permit(:bid_value, :auction_id)
  end

  def find_auction
    @auction = Auction.find params["auction_id"]
  end

  def authorize_user!
    unless current_user.id != @auction.user_id
      render json: { status: :error, message: "Wrong credentials" }
    end
  end
end
