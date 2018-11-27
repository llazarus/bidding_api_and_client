class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy

  validates :title, presence: true
  validates :details, presence: true
  validates :ends_on, inclusion: { in: (Date.today..Date.today+5.years) }
  validates :reserve_price, numericality: { greater_than: 0 }
end
