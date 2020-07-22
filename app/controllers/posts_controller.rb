class PostsController < ApplicationController

    skip_before_action :logged_in?, only: [:index, :show]

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end

    def create
        # byebug
        post_params[:user_id] = @user.id
        post_params[:resolved?] = "tree"
        post_params[:likes] = 0
        byebug
        post = Post.create(post_params)
        # if post.user_id == @user.id
        #    post.save
           render json: PostSerializer.new(post)
        # end
        
    end


    def show
        if @user
        post = Post.find_by(id: params[:id])
        # byebug
        render json: PostSerializer.new(post) 
        end
    end


    def update 
        if @user
        post = Post.find(params[:id])
        post.likes += 1
        # post['resolved?'] = !post['resolved?']
        # byebug
        post.save
        end

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
