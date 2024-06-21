class Api::TodayController < ApiController
  def show
    render json: {
      today: Date.today
    }
  end
end
