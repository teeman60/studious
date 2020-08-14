class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :posts, :comments, :appointments
    # has_many :comments
    # has_many :posts
    # has_many :appointments
    # has_many :skills, through: :appointments
end
