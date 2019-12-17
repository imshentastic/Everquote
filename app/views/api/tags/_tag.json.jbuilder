json.extract! tag, :id, :name
json.notes do
  json.array! tag.notes.ids
end
