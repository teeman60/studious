class SkillSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :about, :resources
  # has_many :appointments
  # has_many :users, through: :appointments
end
