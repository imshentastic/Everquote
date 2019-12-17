# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_17_151021) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "notebooks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.boolean "starred"
    t.boolean "default"
    t.boolean "trashed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["default"], name: "index_notebooks_on_default"
    t.index ["starred"], name: "index_notebooks_on_starred"
    t.index ["title"], name: "index_notebooks_on_title"
    t.index ["trashed"], name: "index_notebooks_on_trashed"
    t.index ["user_id"], name: "index_notebooks_on_user_id"
  end

  create_table "notes", force: :cascade do |t|
    t.string "heading", null: false
    t.string "body"
    t.integer "notebook_id", null: false
    t.integer "author_id", null: false
    t.boolean "starred"
    t.boolean "trashed"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.index ["body"], name: "index_notes_on_body"
    t.index ["heading"], name: "index_notes_on_heading"
    t.index ["notebook_id"], name: "index_notes_on_notebook_id"
    t.index ["starred"], name: "index_notes_on_starred"
    t.index ["trashed"], name: "index_notes_on_trashed"
  end

  create_table "taggings", id: false, force: :cascade do |t|
    t.integer "note_id", null: false
    t.string "tag_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["note_id"], name: "index_taggings_on_note_id"
    t.index ["tag_name"], name: "index_taggings_on_tag_name"
  end

  create_table "tags", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "name", null: false
    t.boolean "starred"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name"
    t.index ["starred"], name: "index_tags_on_starred"
    t.index ["user_id"], name: "index_tags_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
