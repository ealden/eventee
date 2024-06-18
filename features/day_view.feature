Feature: Day View

  Scenario: Day View
    Given I have these existing events:
      | Summary   | Starts At         | Ends At           |
      | Event 1   | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2   | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3   | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4   | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5a  | 2024-06-18 13:00  | 2024-06-18 14:00  |
      | Event 5b  | 2024-06-18 13:00  | 2024-06-18 15:00  |
      | Event 6   | 2024-06-30 12:00  | 2024-06-30 18:00  |
    When  I try to view events in day view
    Then  I must see the calendar for 'June 18, 2024'
    And   I must see 2 events
    And   I must see these events on '2024-06-18':
      | Starts At | Summary   |
      | 13:00     | Event 5a  |
      | 13:00     | Event 5b  |
