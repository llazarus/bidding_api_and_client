class BidSerializer < ActiveModel::Serializer
  attributes :id, :bid, :created_at

  belongs_to :users, key: :author

  def created_at
    object.created_at.strftime('%Y-%B-%d')
  end
end
