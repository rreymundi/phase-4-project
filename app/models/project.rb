class Project < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    has_many :tasks
    has_many :users, through: :tasks
end
