class RemoveSavedColumnFromTasksTable < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :saved
  end
end
