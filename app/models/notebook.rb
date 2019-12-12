class Notebook < ApplicationRecord
    attribute :starred, :boolean, default: false
    attribute :trashed, :boolean, default: false

    
end