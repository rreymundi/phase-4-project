class ProjectsController < ApplicationController

    def index
        tasks = Project.all
        render json: projects
    end

end
