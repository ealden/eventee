Feature: All Events View

  Scenario: All Events View
    Given I have these existing events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |
    When  I try to view all my events
    Then  I must see the following events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |
