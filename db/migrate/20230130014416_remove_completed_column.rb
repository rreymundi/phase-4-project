class RemoveCompletedColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :tasks, :completed
  end
end
