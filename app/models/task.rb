class Task < ApplicationRecord
    belongs_to :user
    belongs_to :projects, through: :tasks
end
