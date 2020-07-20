class UsersController < ApplicationController #Api::V1:: before userscontroller

    skip_before_action :logged_in?, only: [:create, :index, :show]

    def index
        users = User.all
        # options = {
        #     include: [:post, :comment, :appointment]
        # }
        render json: UserSerializer.new(users)
    end

    
    def create 
        # byebug
        user = User.new(user_params)

        if user.valid?
            user.save
            render json: {user: UserSerializer.new(user)}, status: :created 
        else
            render json: {error: "Failed to create a user"}, status: :not_acceptable
        end
    end



    def show 
        # user_params[:id] = @user.id
        # byebug
        user = User.find_by(id: params[:id])
        # if user == @user
        render json: UserSerializer.new(user)
        
    end



    private

    def user_params
        params.permit(:username, :password)
    end

end
