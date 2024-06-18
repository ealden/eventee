def load_day_view
  @page = EventsPage.new

  @page.load

  @page.nav_day_view.click
end

When 'I try to view events in day view' do
  load_day_view
end

When 'I try to view events yesterday' do
  load_day_view

  @page.day_view.prev_day.click
end

When 'I try to view events tomorrow' do
  load_day_view

  @page.day_view.next_day.click
end

When 'I try to view events today' do
  load_day_view

  # We default to today, so navigate to a different day first
  @page.day_view.prev_day.click

  @page.day_view.this_day.click
end
