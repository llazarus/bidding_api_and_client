class AuctionSerializer < ActiveModel::Serializer
  attributes :id, :title, :details, :ends_on, :reserve_price

  belongs_to :user, key: :author
  has_many :bids
end
