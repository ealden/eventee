class EventRow < SitePrism::Section
  element :summary, '.summary'
  element :starts_at, '.starts_at'
  element :ends_at, '.ends_at'
end

class EventsPage < SitePrism::Page
  set_url '/'

  element :month_view, '#month-view'

  sections :events, EventRow, '#events .event'
end
