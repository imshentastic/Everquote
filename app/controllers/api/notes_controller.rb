class Api::NotesController < ApplicationController
    before_action :require_logged_in!

    def index

        # @notebook = Notebook.find(params[:notebook_id])
        # @notes = Note.find(params[:note_id])
        @notes = Note.all
        # where(current_user.notebooks.id.include?())
        # findby curent current_user
        # User.includes notebooks
    end

    def show
        # @note = current_user.notebooks.notes.find(params[:id])
        @note = Note.find(params[:id])
    end

    def create
        @notebook = Notebook.find(params[:notebook_id])
        @note = Note.new(notebook_id: params[:notebook_id])

        
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
        params.require(:note).permit(:heading, :body, :notebook_id, :starred, :trashed, :updated_at)
    end
end
