class AddSkillTitleToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :skill_title, :string
  end
end
