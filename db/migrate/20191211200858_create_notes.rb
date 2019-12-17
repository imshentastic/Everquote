class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :heading, null: false
      t.string :body
      t.integer :notebook_id, null: false
      t.integer :author_id, null: false
      t.boolean :starred
      t.boolean :trashed

      t.timestamps
    end

    add_index :notes, :heading
    add_index :notes, :body
    add_index :notes, :notebook_id
    add_index :notes, :starred
    add_index :notes, :trashed
  end
end
