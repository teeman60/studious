class DropEngagement < ActiveRecord::Migration[6.0]
  def change
    drop_table :engagements
  end
end
