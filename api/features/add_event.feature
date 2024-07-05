Feature: Add Event

  Scenario: Add Event
    Given I have this event:
      | Summary   | New Event         |
      | Starts At | 2024-07-02 15:00  |
      | Ends At   | 2024-07-02 18:00  |
    When  I try to add a new event
    Then  I must see the message '✅ New event added'
    And   I must see these events:
      | Summary   | Starts At         | Ends At           |
      | New Event | 2024-07-02 15:00  | 2024-07-02 18:00  |
