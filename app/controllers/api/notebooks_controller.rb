class Api::NotebooksController < ApplicationController
    before_action :require_logged_in

    def index
        @noteboooks = Notebook.all
    end

    def show

    end

    def create

    end

    def destroy
    end

    def edit
    end

end
