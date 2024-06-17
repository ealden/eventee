class EventRow < SitePrism::Section
  element :summary, '.summary'
  element :starts_at, '.starts_at'
  element :ends_at, '.ends_at'
end

class AllEventsSection < SitePrism::Section
  sections :events, EventRow, '#events .event'
end

class MonthViewSection < SitePrism::Section
  element :current_month, '#current-month'

  elements :month_days, '#month .day'

  sections :events, EventRow, '.event'
end

class EventsPage < SitePrism::Page
  set_url '/'

  element :nav_all_events, '#nav-all-events'
  element :nav_month_view, '#nav-month-view'

  section :all_events, AllEventsSection, '#all-events'
  section :month_view, MonthViewSection, '#month-view'
end
