json.extract! notebook, :id, :title, :user_id, :starred, :default, :trashed
json.notes do
    json.array! notebook.notes.ids
end