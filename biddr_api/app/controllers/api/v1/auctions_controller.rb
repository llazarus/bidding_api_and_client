class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, except: [ :index, :show ]
  before_action :find_auction, only: [ :destroy ]
  before_action :authorize_user!, only: [ :destroy ]

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

  def find_auction
    @auction = Auction.find params[:id]
  end

  def auction_params
    params.require(:auction).permit(:title, :details, :ends_on, :reserve_price)
  end

  def authorize_user!
    unless current_user.id == @auction.user_id
      render json: { status: :error, message: "Wrong credentials" }
    end
  end
end
