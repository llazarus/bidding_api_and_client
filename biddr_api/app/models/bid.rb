class Bid < ApplicationRecord
  belongs_to :auction

  validates :bid, presence: true
end
