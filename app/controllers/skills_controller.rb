class SkillsController < ApplicationController

    def index
        skills = Skill.all 
        render json: SkillSerializer.new(skills)
    end
end
