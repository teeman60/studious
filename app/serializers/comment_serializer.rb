class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :user_id, :post_id, :content, :likes, :created_at
  # belongs_to :user
  # belongs_to :post
end
