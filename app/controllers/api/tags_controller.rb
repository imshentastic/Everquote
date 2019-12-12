class Api::TagsController < ApplicationController

        before_action :require_logged_in!
    
        def index
            @tags = current_user.tags.all
        end
    
        def show
            @tag = current_user.tags.find(params[:id])
        end
    
        def create
            @tag = current_user.tags.new(tag_params)
    
            if @tag.save
                render :show
            else
                render json: @tag.errors.full_messages, status: 422
            end
        end
    
        def destroy
            @tag = current_user.tags.find(params[:id])
            @tag.destroy
    
            render :show
        end
    
        def update
            @tag = current_user.tags.find(params[:id])
    
            if @tag.update(tag_params)
                render :show
            else
                render json: @tag.errors.full_messages, status: 422
            end
        end
    
        private
    
        def tag_params
            params.require(:tag).permit(:note_id, :user_id, :hashtag, :starred)
        end

    
end
