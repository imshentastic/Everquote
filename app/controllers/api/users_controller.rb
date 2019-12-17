class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            Notebook.create!(author_id: @user.id, title: "Notebook")
            render json: @user
        else
            render json: @user.errors.full_messages, status: 422
            # This error is in array format
        end
    end

    def show
        @user = User.find(params[:id])
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :full_name)
    end
end
