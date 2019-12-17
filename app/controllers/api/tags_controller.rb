class Api::TagsController < ApplicationController

        before_action :require_logged_in!
    
        def index
            @tags = current_user.tags.sort_by { |tag| tag.name}
        end
    
        def show
            @tag = current_user.tags.find(params[:name])
        end
    
        def create
            @tag = Tag.new(tag_params)
            @tag.user = current_user
    
            if @tag.save
                render :show
            else
                render json: @tag.errors.full_messages, status: 422
            end
        end
    
        def destroy
            @tag = current_user.tags.find(params[:name])
            @tag.destroy
    
            render :show
        end
    
        def update
            @tag = current_user.tags.find(params[:name])
    
            if @tag.update(tag_params)
                render :show
            else
                render json: @tag.errors.full_messages, status: 422
            end
        end
    
        private
    
        def tag_params
            params.require(:tag).permit(:name, :starred)
        end

    
end
