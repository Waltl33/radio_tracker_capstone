class CourtsController < ApplicationController
    before_action :set_access_control_headers
    def index
      
     render json: Deputy.where({location: "Courts"}).order(last_name: :asc)
  
        

    end
    
    # def show
    # @deputies =  Deputy.find_by(params[:id]), status: :ok
    # render json: @deputies.where(location: "courts").order(last_name: :desc)
    # end
private
def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
end

end
