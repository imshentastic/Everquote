# == Schema Information
#
# Table name: taggings
#
#  id         :bigint           not null, primary key
#  note_id    :integer          not null
#  tag_name   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
    validates :note, uniqueness: { scope: :tag, message: "Tag already exists" }
    validates :note, :tag, presence: true
  
    belongs_to :note
    
    belongs_to :tag,
      primary_key: :name,
      foreign_key: :tag_name,
      class_name: :Tag
  end
  
