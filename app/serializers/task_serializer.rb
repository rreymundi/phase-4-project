class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :priority, :project
  belongs_to :project
end