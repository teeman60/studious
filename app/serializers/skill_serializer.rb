class SkillSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title
  # has_many :appointments
  # has_many :users, through: :appointments
end
