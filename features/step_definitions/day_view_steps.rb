When 'I try to view events in day view' do
  @page = EventsPage.new

  @page.load

  @page.nav_day_view.click
end
