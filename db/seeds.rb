# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tagging.destroy_all
Tag.destroy_all
Note.destroy_all
Notebook.destroy_all
User.destroy_all

user1 = User.create(email: "hermionegranger@gmail.com", password:"hogwarts")
user2 = User.create(email: "jamescorden@gmail.com", password:"jamescorden")


notebook1 = Notebook.create(title: "My Daily Musings", user_id: user2.id, starred: true, default: true, trashed: false)
notebook2 = Notebook.create(title: "A History of Magic", user_id: user1.id, starred: true, default: true, trashed: false)


note1 = Note.create(heading: "Cooking Lessons", body: "A watched pot never boils!", notebook_id: notebook1.id, author_id: user2.id, starred: false, trashed: false)
note2 = Note.create(heading: "Life Lessons", body: "The difference between doing something and not doing something is doing something.", notebook_id: notebook1.id, author_id: user2.id, starred: false, trashed: false)
note3 = Note.create(heading: "Mischief Managed", body: "Disillusion! That's the spell I'll need to get around undetected.", notebook_id: notebook2.id, author_id: user1.id, starred: true, trashed: false)
note4 = Note.create(heading: "N.E.W.T.S.", body: "Study hard in Potions! Attend office hours with Professor McGonagall.", notebook_id: notebook2.id, author_id: user1.id, starred: false, trashed: false)


tag1 = Tag.create(user_id: notebook1.user_id, name: "sensational", starred: true)
tag2 = Tag.create(user_id: notebook1.user_id, name: "memorable", starred: false)
tag3 = Tag.create(user_id: notebook2.user_id, name: "false", starred: false)

# note1.tags << tag1
# note2.tags << tag1
# note2.tags << tag2
# note4.tags << tag3


tagging1 = Tagging.create!(note_id: note1.id, tag_name: tag1.name)
tagging2 = Tagging.create!(note_id: note2.id, tag_name: tag1.name)
tagging3 = Tagging.create!(note_id: note3.id, tag_name: tag2.name)
tagging4 = Tagging.create!(note_id: note1.id, tag_name: tag3.name)
