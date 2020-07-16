class AppointmentsController < ApplicationController

    def index
        appointments = Appointment.all
        render json: AppointmentSerializer.new(appointments)
    end
end
