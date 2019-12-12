class Api::NotesController < ApplicationController
    before_action :require_logged_in!

    def index
        @notes = current_user.notes.all
    end

    def show
        @notebook = current_user.notes.find(params[:id])
    end

    def create
        @note = current_user.notes.new(note_params)

        if @note.save
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    def destroy
        @note = current_user.notes.find(params[:id])
        @note.destroy

        render :show
    end

    def update
        @note = current_user.notes.find(params[:id])

        if @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private

    def note_params
        params.require(:note).permit(:heading, :body, :notebook_id, :starred, :trashed)
    end
end
