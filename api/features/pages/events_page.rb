class EventRow < SitePrism::Section
  element :summary, '.summary'
  element :starts_at, '.starts_at'
  element :ends_at, '.ends_at'
end

class EventsPage < SitePrism::Page
  set_url '/'

  element :all_events_view, '#nav-all-events-view'
  element :day_view, '#nav-day-view'
  element :week_view, '#nav-week-view'
  element :month_view, '#nav-month-view'
  element :year_view, '#nav-year-view'

  element :current_period, '#current-period'

  element :prev_period, '#prev-period'
  element :this_period, '#this-period'
  element :next_period, '#next-period'

  elements :days, '.day'
  elements :days_with_events, '.has-events'

  sections :events, EventRow, '.event'

  def sorted_events
    events.sort do |a, b|
      a.starts_at.text <=> b.starts_at.text
    end
  end

  def event_hashes
    sorted_events.collect do |event|
      {
        'Summary' => event.summary.text,
        'Starts At' => event.starts_at.text,
        'Ends At' => event.ends_at.text
      }
    end
  end

  def days_of_month
    @months ||= days_by_month
  end

  private

    def days_by_month
      months = {}

      days.each do |day|
        month = day[:class].split(' ').keep_if { |clazz|
          clazz.include? 'month-'
        }.first.delete('month-').to_i

        unless months.include? month
          months[month] = []
        end

        months[month] << day
      end

      months
    end
end
