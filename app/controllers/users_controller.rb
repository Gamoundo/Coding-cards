class UsersController < ApplicationController

    def index 
        users = User.all
        render json: users
    end

    def create
        user = User.create(user_params)
        
        render json: user
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user
    end

    private

    def user_params
        params.permit(:name, :password)
    end
end
