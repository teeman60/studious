class CommentsController < ApplicationController

    skip_before_action :logged_in?, only: [:index, :show]

    def index
        comments = Comment.all 
        render json: CommentSerializer.new(comments)
    end

    def create
        # byebug
        comment_params[:user_id] = @user.id
        # comment_params[:resolved?] = false
        comment_params[:likes] = 0
        byebug
        comment = Comment.create(comment_params)
        # if comment.user_id == @user.id
        #    comment.save
           render json: CommentSerializer.new(comment)
        # end
        
    end


    def show
        # if @user
        comment = Comment.find(params[:id])
        render json: CommentSerializer.new(comment) 
        # end
    end


    def update 
        if @user
        comment = Comment.find(params[:id])
        comment.likes += 1
        # comment['resolved?'] = !comment['resolved?']
        # byebug
        comment.save
        end

    end


    def destroy
        # byebug
        if @user
        comment = Comment.find(params[:id])
        comment.destroy
        end
    end


    def comment_params
        params.require(:comment).permit!
    end
end
