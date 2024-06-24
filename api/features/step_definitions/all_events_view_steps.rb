When 'I try to view all my events' do
  @page = EventsPage.new

  @page.load

  @page.all_events_view.click
end
