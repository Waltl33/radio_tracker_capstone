class UsersController < ApplicationController
    #  skip_before_action :authorize, only: [:create, :show ]
      rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
      before_action :set_access_control_headers
  
      def index 
          users = User.all 
          render json: users 
      end
  
      # show an existing user that is already there 
      def show
          user = User.find_by(id: session[:user_id])
          if user 
              render json: user, status: :ok
          else
            render json: { error: "Not authorized" }, status: :unauthorized
          end
      end
  
      #signup 
      # when create new user set them in sessions 
      # create and login user at same time 
      def create
          user = User.create!(user_params)
      
        render json: user, status: :created
        end
  
  
      def update
          users = User.find(params[:id])
          render json = users.update!(user_params), status: :ok
      end
  
  
      def destroy
          users = User.find(params[:id])
          users.destroy
          head :no_content
      end
      
  
  
  
  
  private 
  
  
  def user_params
      params.permit(:name, :email, :password)
    end
  
      
      def user_not_found
          render json: { error: "User not found"}, status: :not_found
      end
  
      def invalid(error)
          render json: { error: error.message}, status:422
      end
      def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end
  end
  