def load_month_view
  @page = EventsPage.new

  @page.load

  @page.nav_month_view.click
end

When 'I try to view events in month view' do
  load_month_view
end

When 'I try to view events last month' do
  load_month_view

  @page.month_view.prev_month.click
end

When 'I try to view events next month' do
  load_month_view

  @page.month_view.next_month.click
end

When 'I try to view events this month' do
  load_month_view

  # We default to this month, so navigate to a different month first
  @page.month_view.prev_month.click

  @page.month_view.this_month.click
end
