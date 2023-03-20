class RentedRadiosController < ApplicationController
    before_action :set_access_control_headers
    def index
        render json: RentedRadio.all, status: :ok
    end
    
    def show
        render json: RentedRadio.find(params[:id]), status: :ok
    end
    
    def create
        render json: RentedRadio.create!(rented_radio_params), status: :created
    end
    
    def update
        rented_radios = RentedRadio.find(params[:id])
        render json: radios.update!(rented_radio_params), status: :ok
    end
    
    def destroy
        rented_radios = RentedRadio.find(params[:id])
        rented_radios.destroy
        head :no_content
    end
    
    private
    
    def rented_radio_params
        params.permit(:deputy_id, :radio_id)
    end
    def set_access_control_headers
        headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
        headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
        headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
    end
end
