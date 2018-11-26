class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!

  def create
    bid = Bid.new bid_params
    bid.user_id = current_user.id
    bid.save!
    p "Bid created! ===================="
    render json: auction
  end

  private 
  def bid_params
    params.require(:bid).permit(:bid)
  end
end
