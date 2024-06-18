Feature: Week View

  Background:
    Given I have these existing events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |
      | Event 6 | 2024-05-07 9:00   | 2024-05-07 17:00  |
      | Event 7 | 2024-07-07 7:00   | 2024-07-07 21:00  |

  Scenario: Week View
    When  I try to view all my events in week view
    Then  I must see the following week for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
    And   I must see the following week events on '2024-06-17':
      | Starts At | Summary |
      | 14:00     | Event 4 |
