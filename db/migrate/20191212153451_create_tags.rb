class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.string :hashtag, null: false
      t.boolean :starred

      t.timestamps
    end
    add_index :tags, :user_id
    add_index :tags, :hashtag
    add_index :tags, :starred
  end
end
