class CreateUserCards < ActiveRecord::Migration[6.0]
  def change
    create_table :user_cards do |t|
      t.string :name
      t.string :img
      t.integer :att_val
      t.integer :def_val
      t.text :description
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :card, null: false, foreign_key: true

      t.timestamps
    end
  end
end
