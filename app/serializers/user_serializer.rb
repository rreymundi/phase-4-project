class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :projects, :tasks
  has_many :tasks
  has_many :projects
end
