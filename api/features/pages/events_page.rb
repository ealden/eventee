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

  element :current_period, '#current-period'

  element :prev_period, '#prev-period'
  element :this_period, '#this-period'
  element :next_period, '#next-period'

  elements :days, '.day'

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
end
