class ProjectsController < ApplicationController
    before_action :authorize

    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def create
        project = Project.create!(project_params)
        project.valid?
        render json: project, status: :created
    end

    def update 
        project = Project.find(params[:id])
        project.update!(project_params)
        project.valid?
        render json: project, status: :ok
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy 
        head :no_content
    end

    private

    def project_params 
        params.permit(:name, :description, :user_id)
    end

end