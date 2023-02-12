class Task < ApplicationRecord
    validates :name, presence: true
    validates :description, presence: true
    validates :priority, presence: true
    validates :project_id, presence: true
    belongs_to :user
    belongs_to :project
end
