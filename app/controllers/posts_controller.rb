class PostsController < ApplicationController

    skip_before_action :logged_in?, only: [:index, :show]

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end

    def create
        byebug
        post_params[:user_id] = @user.id
        post = Post.create(post_params)
        # if post.user_id == @user.id
        #    post.save
           render json: PostSerializer.new(post)
        # end
        
    end


    def show
        # if @user
        post = Post.find(params[:id])
        render json: PostSerializer.new(post) 
        # end
    end


    def destroy
        # byebug
        if @user
        post = Post.find(params[:id])
        post.destroy
        end
    end


    def post_params
        params.require(:post).permit!
    end
end
