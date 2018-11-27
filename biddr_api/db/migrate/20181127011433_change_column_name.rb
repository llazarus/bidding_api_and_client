class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :bids, :bid, :bid_value
  end
end
