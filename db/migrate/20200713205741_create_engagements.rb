class CreateEngagements < ActiveRecord::Migration[6.0]
  def change
    create_table :engagements do |t|
      t.string :posts
      t.string :comments
      t.integer :user_id

      t.timestamps
    end
  end
end
