class SkillsController < ApplicationController

    skip_before_action :logged_in?, only: [:index]

    def index
        skills = Skill.all 
        render json: SkillSerializer.new(skills)
    end

    def create
        # byebug
        skill = Skill.create!(skill_params)
        render json: SkillSerializer.new(skill)
    end


    def skill_params
        params.require(:skill).permit!
    end
end
