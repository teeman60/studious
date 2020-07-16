class PostsController < ApplicationController

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end

    def create
        byebug
        post = Post.new(post_params)
        render json: PostSerializer.new(post)
    end


    def post_params
        params.require(:post).permit!
    end
end
