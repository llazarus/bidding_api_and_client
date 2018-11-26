class Auction < ApplicationRecord
  has_many :bids, dependent: :destroy

  validates :title, presence: true
  validates :details, presence: true
  validates :ends_on, presence: true
  validates :reserve_price, presence: true
end
