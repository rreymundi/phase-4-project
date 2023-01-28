class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :description
      t.string :status
      t.string :priority
      t.boolean :completed
      t.boolean :saved
      t.timestamps
    end
  end
end
