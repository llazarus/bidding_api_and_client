class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid_value, :auction_id, :created_at

  belongs_to :user, key: :author

  def created_at
    object.created_at.strftime('%Y-%B-%d')
  end
end
