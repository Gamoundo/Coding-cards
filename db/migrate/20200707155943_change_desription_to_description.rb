class ChangeDesriptionToDescription < ActiveRecord::Migration[6.0]
  def change
    rename_column :cards,  :desription, :description
  end
end
