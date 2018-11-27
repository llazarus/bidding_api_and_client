class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction

  validates :bid_value, numericality: { greater_than: 0 }
end
