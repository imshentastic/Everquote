class Api::NotesController < ApplicationController
    before_action :require_logged_in!

    def index
        # debugger
        render json: [] if current_user.notes.empty?
        if params[:notebook_id]
            @notes = current_user.notes.select do |note|
                note.notebook_id == params[:notebook_id].to_i
            end
            @notes = @notes.sort_by { |note| note.updated_at }.reverse
        elsif params[:tag_id]
            tag = current_user.tags.find_by(name: params[:tag_id])
            @notes = tag.notes.sort_by  { |note| note.updated_at }.reverse
        else
            @notes = current_user.notes.sort_by {|note|note.updated_at}.reverse
        end
    end

    def show
        @note = current_user.notes.find(params[:id])
    end

    def create
        # debugger
        @note = Note.new(note_params)
        # debugger
        if params[:note][:heading] == ""
            @note.heading = "Untitled Note"
        end

        @note.author = current_user

        # @notebook = Notebook.find(params[:notebook_id])
        # debugger
        if @note.save
            if params[:note][:tags]
                params[:note][:tags].each do |tag|
                    created_tag = Tag.find_by(name: tag)
                    if !created_tag
                        Tag.create(name: tag, user_id: current_user.id)
                    end
                    Tagging.create(tag_id: tag.id, note_id: @note.id)
                end
            end
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

        if @note && @note.update(note_params)
            render :show
        else
            render json: @note.errors.full_messages, status: 422
        end
    end

    private

    def note_params
        params.require(:note).permit(:heading, :body, :notebook_id, :starred, :trashed, :updated_at, :author_id)
    end
end
