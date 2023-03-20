# app/controllers/application_controller.rb
class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :app_invalid
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found





# def hello_world
#     session[:count] = (session[:count] || 0) + 1
#     render json: { count: session[:count] }
# end 


private 
  def app_invalid(error)
    render json: {error: error.message}, status: 422
  end

  def record_not_found(error)
    render json: {error: error.message}, status: :not_found
  end
end
