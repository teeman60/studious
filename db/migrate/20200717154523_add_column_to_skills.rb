class AddColumnToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :about, :string
    add_column :skills, :resources, :text
  end
end
