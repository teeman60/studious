class AddColumnToAppointments < ActiveRecord::Migration[6.0]
  def change
    add_column :appointments, :start_date, :date
    add_column :appointments, :completion_date, :date
    add_column :appointments, :max_partners, :integer
  end
end
