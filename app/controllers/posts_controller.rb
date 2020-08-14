class PostsController < ApplicationController

    skip_before_action :logged_in?, only: [:index, :show]

    def index
        posts = Post.all 
        render json: PostSerializer.new(posts)
    end

    def create
        # byebug
        post_params[:user_id] = @user.id
        post_params[:resolved?] = false
        post_params[:likes] = 0
        # byebug
        post = Post.create(post_params)
        
           post.save
           render json: PostSerializer.new(post)    
    end


    def show           
        # byebug
        post = Post.find_by(id: params[:id])            
        render json: PostSerializer.new(post)      
    end


    def like 
        if @user 
        post = Post.find(params[:id])
        # byebug
        post.likes += 1        
        post.save
        render json: PostSerializer.new(post)        
        end

    end


    def resolve 
        if @user 
            post = Post.find(params[:id])
        end
        
        if post['resolved?'] == false            
            post['resolved?'] = true
        else
            post['resolved?'] = true
            
        end
        post.save
            render json: PostSerializer.new(post)
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
