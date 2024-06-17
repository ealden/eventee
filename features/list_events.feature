Feature: List Events
  Background:
    Given I have a list of events

  Scenario: All Events
    When  I try to view all my events
    Then  I must see the following events:
      | Summary | Starts At               | Ends At                 |
      | Event 1 | 2024-06-14 14:00:00 UTC | 2024-06-14 15:00:00 UTC |
      | Event 2 | 2024-06-14 15:00:00 UTC | 2024-06-14 16:00:00 UTC |
      | Event 3 | 2024-06-14 17:00:00 UTC | 2024-06-14 18:00:00 UTC |

  Scenario: Month View
    When  I try to view all my events in month view
    Then  I must see the following calendar for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     |     | 1   |
      | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
      | 9   | 10  | 11  | 12  | 13  | 14  | 15  |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
      | 23  | 24  | 25  | 26  | 27  | 28  | 29  |
      | 30  |     |     |     |     |     |     |
