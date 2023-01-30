class ProjectsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized

    def index
        projects = Project.all
        render json: projects
    end

    def create
        project = Project.create(project_params)
        project.valid?
        render json: project, status: :created
    end

    private

    def project_params 
        params.permit(:user_id, :name, :description)
    end

    def render_unprocessable_entity
        render json: { error: invalid.record.errors}, status: :unprocessable_entity
    end


end