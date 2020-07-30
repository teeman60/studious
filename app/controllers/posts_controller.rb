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
        # if post.user_id == @user.id
           post.save
           render json: PostSerializer.new(post)
        #    byebug
        # end
        
    end


    def show
      
       
            # user_params[:id] = @user.id
            # byebug
            post = Post.find_by(id: params[:id])
            # options = {
            #     include: [:user, :comments]
            # }
            # byebug
            # username = User.find_by(id: post[:user_id]).username
            # if user == @user
            render json: PostSerializer.new(post) 
     
    end


    def like 
        if @user 
        post = Post.find(params[:id])
        post.likes += 1
        # post['resolved?'] = !post['resolved?']   # both resolved and likes are firing
        # byebug        
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
