json.extract! note, :id, :heading, :body, :starred, :trashed, :author_id
json.notebook_id note.notebook.id

json.updated_at note.updated_at.to_f * 1000
json.created_at note.updated_at.to_f * 1000