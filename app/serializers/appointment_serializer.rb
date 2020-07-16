class AppointmentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :skill_id, :start_date, :completion_date, :max_partners, :created_at
  # belongs_to :user
  # belongs_to :skill
end
