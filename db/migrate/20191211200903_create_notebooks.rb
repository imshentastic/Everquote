class CreateNotebooks < ActiveRecord::Migration[5.2]
  def change
    create_table :notebooks do |t|
      t.string :title
      t.integer :user_id
      t.boolean :starred
      t.boolean :default
      t.boolean :trashed
      
      t.timestamps
    end
    add_index :notebooks, :title
    add_index :notebooks, :user_id
    add_index :notebooks, :starred
    add_index :notebooks, :default
    add_index :notebooks, :trashed
  end
end
