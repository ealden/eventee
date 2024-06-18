class AllEventsView < SitePrism::Section
end

class DayView < SitePrism::Section
  element :prev_day, '#prev-day'
  element :next_day, '#next-day'
end

class WeekView < SitePrism::Section
  element :prev_week, '#prev-week'
  element :this_week, '#this-week'
  element :next_week, '#next-week'
end

class MonthView < SitePrism::Section
  element :prev_month, '#prev-month'
  element :this_month, '#this-month'
  element :next_month, '#next-month'
end

class EventRow < SitePrism::Section
  element :summary, '.summary'
  element :starts_at, '.starts_at'
  element :ends_at, '.ends_at'
end

class EventsPage < SitePrism::Page
  set_url '/'

  element :nav_all_events_view, '#nav-all-events-view'
  element :nav_day_view, '#nav-day-view'
  element :nav_week_view, '#nav-week-view'
  element :nav_month_view, '#nav-month-view'

  element :current_period, '.current-period'

  elements :days, '.day'

  section :all_events_view, AllEventsView, '#all-events-view'
  section :day_view, DayView, '#day-view'
  section :week_view, WeekView, '#week-view'
  section :month_view, MonthView, '#month-view'

  sections :events, EventRow, '.event'

  def events_on date
    events.keep_if do |event|
      event.root_element[:class].include? date
    end
  end
end
