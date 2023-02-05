class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :tasks
  has_many :tasks
end