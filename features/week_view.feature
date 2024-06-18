Feature: Week View

  Background:
    Given I have these existing events:
      | Summary   | Starts At         | Ends At           |
      | Event 1   | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2   | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3   | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4   | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5a  | 2024-06-18 13:00  | 2024-06-18 14:00  |
      | Event 5b  | 2024-06-18 13:00  | 2024-06-18 15:00  |
      | Event 6   | 2024-06-30 12:00  | 2024-06-30 18:00  |

  Scenario: Week View
    When  I try to view all my events in week view
    Then  I must see the following week for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
    And   I must see the following week events on '2024-06-17':
      | Starts At | Summary |
      | 14:00     | Event 4 |
    And   I must see the following week events on '2024-06-18':
      | Starts At | Summary   |
      | 13:00     | Event 5a  |
      | 13:00     | Event 5b  |

  Scenario: Previous Week
    When  I try to view all my events in the previous week
    Then  I must see the following week for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 9   | 10  | 11  | 12  | 13  | 14  | 15  |
    And   I must see the following week events on '2024-06-14':
      | Starts At | Summary |
      | 14:00     | Event 1 |
      | 15:00     | Event 2 |
      | 17:00     | Event 3 |

  Scenario: Next Week
    When  I try to view all my events in the next week
    Then  I must see the following week for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 23  | 24  | 25  | 26  | 27  | 28  | 29  |
    Then  I must not see any events this week

  Scenario: This Week
    When  I try to view all my events this week
    Then  I must see the following week for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
