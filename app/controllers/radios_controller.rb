class RadiosController < ApplicationController
    before_action :set_access_control_headers
def index
    render json: Radio.all, status: :ok
end

def show
    render json: Radio.find(params[:id]), status: :ok
end

def create
    render json: Radio.create!(radio_params), status: :created
end

def update
    radios = Radio.find(params[:id])
    render json = radios.update!(radio_params), status: :ok
end

def destroy
    radios = Radio.find(params[:id])
    radios.destroy
    head :no_content
end

private

def radio_params
    params.permit(:serial_number, :model, :id)
end
def set_access_control_headers
    headers['Access-Control-Allow-Origin'] = 'http://localhost:4000'
    headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, PATCH, DELETE, OPTIONS'
    headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, Accept, Authorization, Token'
end
end