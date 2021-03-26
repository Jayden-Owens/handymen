class Api::ServicesController < ApplicationController
    before_action :set_handymen
    before_action :set_service, except: [:index, :create]
    def index 
        render json: @handymen.services
    end

    def show 
        render json: @Service
    end

    def create
        @services = @handymen.services.new(service_params)
        if @service.save
            render json: @service
        else
            render json: { errors: @post.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @service.update(service_params)
            render json: @service

        else
            render json: { errors: @service.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @service.destroy
        render json: { message: 'post deleted' }
    end

    private
        def service_params
            params.require(:service).permit(:type, :price, :hours)
        end

        def set_handymen
            @handymen = Handymen.find(params [:handymen_id])
        end
end
