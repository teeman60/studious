class PostSerializer
  include FastJsonapi::ObjectSerializer  
  attributes :user_id, :content, :resolved?, :likes, :created_at, :comments, :user
  # belongs_to :user
  # has_many :comments

end
