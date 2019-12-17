# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  heading     :string           not null
#  body        :string
#  notebook_id :integer          not null
#  author_id   :integer          not null
#  starred     :boolean
#  trashed     :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
    attribute :starred, :boolean, default: false
    attribute :trashed, :boolean, default: false
    validates :heading, :author, :notebook, presence: true
    
    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :notebook,
        class_name: :Notebook
    
    # has_and_belongs_to_many :tags

    has_many :taggings,
        primary_key: :id,
        foreign_key: :note_id,
        class_name: :Tagging,
        dependent: :destroy
    has_many :tags, through: :taggings
end
