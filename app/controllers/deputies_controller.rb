class DeputiesController < ApplicationController
    before_action :set_access_control_headers
    def index
        @deputies = Deputy.all.includes(:radios) 
        render json: @deputies
  
        

    end
    
    def show
        render json:Deputy.find(params[:id]), status: :ok
    end
    
    def create
        render json:Deputy.create!(deputy_params), status: :created
    end
    
    def update
       deputies =Deputy.find(params[:id])
       deputies.update(deputy_params)
       render json: deputies, status: :accepted
    end
    
    def destroy
       deputies =Deputy.find(params[:id])
       deputies.destroy
        head :no_content
    end
    
    private
    
    def deputy_params
        params.permit(:first_name, :last_name, :identification_number, :resign, :location,)
    end
    def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end
end
