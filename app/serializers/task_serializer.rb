class TaskSerializer < ActiveModel::Serializer
  attributes :name, :description, :status, :priority, :project
  belongs_to :project
end