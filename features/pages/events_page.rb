class EventRow < SitePrism::Section
  element :summary, '.summary'
  element :starts_at, '.starts_at'
  element :ends_at, '.ends_at'
end

class AllEventsView < SitePrism::Section
  sections :events, EventRow, '.event'
end

class WeekView < SitePrism::Section
  element :current_week, '#current-week'
end

class MonthView < SitePrism::Section
  element :current_month, '#current-month'

  element :prev_month, '#prev-month'
  element :next_month, '#next-month'

  elements :days, '#month .day'

  sections :events, EventRow, '.event'

  def events_on date
    events.keep_if do |event|
      event.root_element[:class].include? date
    end
  end
end

class EventsPage < SitePrism::Page
  set_url '/'

  element :nav_all_events_view, '#nav-all-events-view'
  element :nav_week_view, '#nav-week-view'
  element :nav_month_view, '#nav-month-view'

  section :all_events_view, AllEventsView, '#all-events-view'
  section :week_view, WeekView, '#week-view'
  section :month_view, MonthView, '#month-view'
end
