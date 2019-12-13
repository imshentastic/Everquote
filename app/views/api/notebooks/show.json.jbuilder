
    json.partial! '/api/notebooks/notebook', notebook: @notebook

# json.notebooks do
#     @current_user.notebooks.each do |notebook|
#         json.set! notebook.id do
#             json.partial! '/api/notebooks/notebook', notebook: notebook
#         end
#     end
# end