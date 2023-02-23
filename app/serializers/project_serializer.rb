class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :tasks
  belongs_to :user
end