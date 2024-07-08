Given 'I have this event:' do |table|
  @event = table.transpose.symbolic_hashes.last
end

When 'I try to add a new event' do
  @page = AddEventPage.new

  @page.add_event @event
end
