# @notes.each do |note|
#     json.set! note.id do
#       json.partial! 'note', note: note
#     end
# end
  
json.array! @notes do |note|
  json.partial! 'api/notes/note', note: note
end
