class CreateNotesTags < ActiveRecord::Migration[5.2]
  def change
    create_table :notes_tags, :id => false do |t|
      t.integer :note_id, null: false
      t.integer :tag_id, null: false

      t.timestamps
    end
    add_index :notes_tags, :note_id
    add_index :notes_tags, :tag_id
  end
end
