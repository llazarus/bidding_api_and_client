class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, except: [ :index, :show ]

  def index
    auctions = Auction.order created_at: :desc
    render json: auctions
  end

  def show
    render json: auction
  end

  def create
    auction = Auction.new auction_params
    auction.user_id = current_user.id
    auction.save!
    render json: auction
  end

  def destroy
    auction.destroy
    render json: { status: :success }
  end

  private 
  def auction
    Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :details, :ends_on, :reserve_price)
  end
end
