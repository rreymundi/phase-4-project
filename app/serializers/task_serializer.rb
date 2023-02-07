class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :priority, :project_id, :project
end