def load_day_view
  @page = EventsPage.new

  @page.load

  @page.day_view.click
end

When 'I try to view events in day view' do
  load_day_view
end

When 'I try to view events yesterday' do
  load_day_view

  @page.prev_period.click
end

When 'I try to view events tomorrow' do
  load_day_view

  @page.next_period.click
end

When 'I try to view events today' do
  load_day_view

  # We default to today, so navigate to a different day first
  @page.prev_period.click

  @page.this_period.click
end
