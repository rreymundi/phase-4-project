class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :priority, :project
end