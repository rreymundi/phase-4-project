class TasksController < ApplicationController
    skip_before_action :authorize

    def index
        tasks = Task.all
        render json: tasks, status: :ok
    end

    def update
        task = Task.find(params[:id])
        task.update!(task_params)
        task.valid?
        render json: task, status: :ok
    end

    def create
        task = Task.create!(task_params)
        task.valid?
        render json: task, status: :created
    end

    def destroy
        task = Task.find(params[:id])
        task.destroy
        head :no_content
    end

    private

    def task_params 
        params.permit(:name, :description, :priority, :project_id, :user_id, :status)
    end

end
