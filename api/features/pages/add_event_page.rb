class AddEventPage < SitePrism::Page
  set_url '/'

  element :add_event, '#nav-add-event'

  element :header, '#header'

  element :summary, '#summary'
  element :starts_at, '#starts_at'
  element :ends_at, '#ends_at'

  def load
    super do |page|
      page.add_event.click
    end
  end
end
