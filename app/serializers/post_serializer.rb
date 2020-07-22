class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :content, :resolved?, :likes, :created_at, :comments
  # belongs_to :user
end
