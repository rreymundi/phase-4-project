class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :status, :priority
end
