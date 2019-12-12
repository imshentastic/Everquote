# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  hashtag    :string           not null
#  starred    :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Tag < ApplicationRecord
    attribute :starred, :boolean, default: false
    attribute :trashed, :boolean, default: false
    # validates :hashtag, uniqueness: {scope: :user_id, message: "That tag already exists!"}

    belongs_to :user,
        class_name: :User

    has_and_belongs_to_many :notes
    
end
