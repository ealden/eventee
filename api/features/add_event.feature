Feature: Add Event

  Scenario: Add Event
    Given I have this event:
      | Summary         | New Event   |
      | Starts At Date  | 2024-06-28  |
      | Starts At Time  | 11:00       |
      | Ends At Date    | 2024-06-28  |
      | Ends At Time    | 18:00       |
    When  I try to add a new event
    Then  I must now see these events:
      | Summary   | Starts At         | Ends At           |
      | New Event | 2024-06-28 11:00  | 2024-06-28 18:00  |
