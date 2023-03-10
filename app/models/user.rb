class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :tasks, dependent: :destroy
    has_many :projects, -> { distinct }, through: :tasks, dependent: :destroy
end