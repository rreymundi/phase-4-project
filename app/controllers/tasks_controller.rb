class TasksController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        tasks = Task.all
        render json: tasks, status: :ok
    end

    # def show
    #     tasks = Task.where("user_id= ?", session[:user_id])
    #     render json: tasks
    # end

    def update
        task = Task.find(params[:id])
        task.update(task_params)
        render json: task, status: :ok
    end

    def create
        task = Task.create(task_params)
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

    def render_unprocessable_entity
        render json: { error: invalid.record.errors}, status: :unprocessable_entity
    end


end
