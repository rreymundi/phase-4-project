class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

  # signing up
  def create
    user = User.create!(user_params)
    if user.valid?
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # remaining logged in
  def show
    current_user = User.find(session[:user_id])
    render json: current_user, status: :ok
  end

  # test all users
  def index
    users = User.all
    render json: users
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

  def render_unprocessable_entity
    render json: { error: invalid.record.errors }, status: :unprocessable_entity
  end

end