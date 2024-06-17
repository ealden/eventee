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
    Then  I must see the date 'Jun 1'
