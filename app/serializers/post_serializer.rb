class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :content, :resolved?, :likes, :created_at
  # belongs_to :user
end
