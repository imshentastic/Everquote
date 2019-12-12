# == Schema Information
#
# Table name: notes
#
#  id          :bigint           not null, primary key
#  heading     :string
#  body        :string
#  notebook_id :integer
#  starred     :boolean
#  trashed     :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Note < ApplicationRecord
    attribute :starred, :boolean, default: false
    attribute :trashed, :boolean, default: false
    validates :heading, presence: true
    


    belongs_to :notebook,
        class_name: :Notebook
    
    has_and_belongs_to_many :tags
end
