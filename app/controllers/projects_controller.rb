class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        projects = Project.all
        render json: projects, status: :ok
    end

    def create
        project = Project.create(project_params)
        project.valid?
        render json: project, status: :created
    end

    def update 
        project = Project.find(params[:id])
        project.update(project_params)
        render json: project, status: :ok
    end

    def destroy
        project = Project.find(params[:id])
        project.destroy 
        head :no_content
    end

    private

    def project_params 
        params.permit(:name, :description)
    end

    def render_unprocessable_entity(invalid)
        render json: { error: invalid.record.errors}, status: :unprocessable_entity
    end


end