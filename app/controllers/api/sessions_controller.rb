class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render 'api/users/show';
        
        else
            render json: ["The email or password you entered is invalid"], status: 401
        end
    end

    def destroy
        if logged_in?
            logout
            render json: {}
            
        else
            render json: ["User not found!"], status: 404
        end
    end
end
