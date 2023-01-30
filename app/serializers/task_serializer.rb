class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :priority
  belongs_to :project
end