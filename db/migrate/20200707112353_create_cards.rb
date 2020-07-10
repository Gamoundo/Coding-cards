class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :img
      t.integer :att_val
      t.integer :def_val
      t.text :desription

      t.timestamps
    end
  end
end
