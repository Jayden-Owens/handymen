class Api::HandymensController < ApplicationController
end

def index 
render json: Handymen.all
end

def show
render json: Handymen.find(params[:id])
end

def create
@handymen = Handymen.new(handymen_params)
if @handymen.save
  render json: @handymen
else
  render json: { errors: @handymen.errors }, status: :unprocessable_entity
end
end

def update
@handymen = Handymen.find(params[:id])
if @handymen.update(handymen_params)
  render json: @handymen
else
  render json: { errors: @handymen.errors }, status: :unprocessable_entity
end
end
def destroy
Handymen.find(params[:id]).destroy
render json: { message: 'Handyman Item was deleted'}
end

private 
def handymen_params
  params.require(:handymen).permit(:name, :specialty)
end
end

