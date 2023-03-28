class JailsController < ApplicationController
    before_action :set_access_control_headers
    def index
      
        render json: Deputy.where({location: "Jail"}).order(last_name: :asc)
     
           
   
       end

       private
def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
end

end
