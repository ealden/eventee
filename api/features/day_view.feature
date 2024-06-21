Feature: Day View

  Background:
    Given today is '2024-06-18'
    And   I have these existing events:
      | Summary   | Starts At         | Ends At           |
      | Event 1   | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2   | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3   | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4   | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5a  | 2024-06-18 13:00  | 2024-06-18 14:00  |
      | Event 5b  | 2024-06-18 13:00  | 2024-06-18 15:00  |
      | Event 6   | 2024-06-30 12:00  | 2024-06-30 18:00  |

  Scenario: Day View
    When  I try to view events in day view
    Then  I must see the calendar for 'June 18, 2024'
    And   I must see these events:
      | Summary   | Starts At         | Ends At           |
      | Event 5a  | 2024-06-18 13:00  | 2024-06-18 14:00  |
      | Event 5b  | 2024-06-18 13:00  | 2024-06-18 15:00  |

  Scenario: Yesterday
    When  I try to view events yesterday
    Then  I must see the calendar for 'June 17, 2024'
    And   I must see these events:
      | Summary   | Starts At         | Ends At           |
      | Event 4   | 2024-06-17 14:00  | 2024-06-17 20:00  |

  Scenario: Tomorrow
    When  I try to view events tomorrow
    Then  I must see the calendar for 'June 19, 2024'
    And   I must not see any events

  Scenario: Today
    When  I try to view events today
    Then  I must see the calendar for 'June 18, 2024'
