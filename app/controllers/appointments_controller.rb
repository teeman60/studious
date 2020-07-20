class AppointmentsController < ApplicationController

    skip_before_action :logged_in?, only: [:index]

    def index
        appointments = Appointment.all
        render json: AppointmentSerializer.new(appointments)
    end


    def create
        # byebug
        appointment_params[:user_id] = @user.id
        skill_id = Skill.find_by("title": params["skill"]).id
        appointment_params[:skill_id] = skill_id
        appointment = Appointment.create!(appointment_params)
        byebug
        render json: AppointmentSerializer.new(appointment)
        # end
        
    end


    def find_id

    end


    def appointment_params
        params.require(:appointment).permit!
    end


end
