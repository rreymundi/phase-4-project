class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    skip_before_action :authorized

    def index
        tasks = Task.all
        render json: tasks
    end

    def create
        task = Task.create(task_params)
        task.valid?
        render json: task, status: :created
    end

    private

    def task_params 
        params.permit(:name, :description)
    end

    def render_unprocessable_entity
        render json: { error: invalid.record.errors}, status: :unprocessable_entity
    end


end
