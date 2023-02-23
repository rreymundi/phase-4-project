class Project < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :description, presence: true
    has_many :tasks, dependent: :destroy
    # has_many :users, through: :tasks
    belongs_to :user
end
