When 'I try to view all my events' do
  @page = EventsPage.new

  @page.load

  @page.nav_all_events_view.click
end
