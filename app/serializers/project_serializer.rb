class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :tasks
end