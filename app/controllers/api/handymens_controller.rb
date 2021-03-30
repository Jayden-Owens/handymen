class Api::HandymensController < ApplicationController
  def index 
  render json: Handyman.all
  end
  def show
  render json: Handyman.find(params[:id])
  end
  def create
  @handymen = Handyman.new(handymen_params)
  if @handymen.save
    render json: @handymen
  else
    render json: { errors: @handymen.errors }, status: :unprocessable_entity
  end
  end
  def update
  @handymen = Handyman.find(params[:id])
  if @handymen.update(handymen_params)
    render json: @handymen
  else
    render json: { errors: @handymen.errors }, status: :unprocessable_entity
  end
  end
  def destroy
  Handyman.find(params[:id]).destroy
  render json: { message: 'Handyman Item was deleted'}
  end
  private 
  def handymen_params
    params.require(:handymen).permit(:name, :specialty)
  end
  end