class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]
  
  def index
    users = User.all
    render json: users, status: :ok
  end

  # signing up
  def create
    user = User.create!(user_params)
    user.valid?
    render json: user, status: :created
  end

  # remaining logged in
  def show
    render json: @current_user
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end