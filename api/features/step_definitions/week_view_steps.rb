def load_week_view
  @page = EventsPage.new

  @page.load

  @page.nav_week_view.click
end

When 'I try to view events in week view' do
  load_week_view
end

When 'I try to view events last week' do
  load_week_view

  @page.week_view.prev_week.click
end

When 'I try to view events next week' do
  load_week_view

  @page.week_view.next_week.click
end

When 'I try to view events this week' do
  load_week_view

  # We default to this week, so navigate to a different week first
  @page.week_view.prev_week.click

  @page.week_view.this_week.click
end