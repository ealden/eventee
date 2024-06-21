Feature: Month View

  Background:
    Given today is '2024-06-18'
    And   I have these existing events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |
      | Event 6 | 2024-05-07 09:00  | 2024-05-07 17:00  |
      | Event 7 | 2024-07-07 07:00  | 2024-07-07 21:00  |

  Scenario: Month View
    When  I try to view events in month view
    Then  I must see the calendar for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     |     | 1   |
      | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
      | 9   | 10  | 11  | 12  | 13  | 14  | 15  |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
      | 23  | 24  | 25  | 26  | 27  | 28  | 29  |
      | 30  |     |     |     |     |     |     |
    And   I must see these events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |

  Scenario: Last Month
    When  I try to view events last month
    Then  I must see the calendar for 'May 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     | 1   | 2   | 3   | 4   |
      | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
      | 12  | 13  | 14  | 15  | 16  | 17  | 18  |
      | 19  | 20  | 21  | 22  | 23  | 24  | 25  |
      | 26  | 27  | 28  | 29  | 30  | 31  |     |
    And   I must see these events:
      | Summary | Starts At         | Ends At           |
      | Event 6 | 2024-05-07 09:00  | 2024-05-07 17:00  |

  Scenario: Next Month
    When  I try to view events next month
    Then  I must see the calendar for 'July 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
      | 8   | 9   | 10  | 11  | 12  | 13  | 14  |
      | 15  | 16  | 17  | 18  | 19  | 20  | 21  |
      | 22  | 23  | 24  | 25  | 26  | 27  | 28  |
      | 29  | 30  | 31  |     |     |     |     |
    And   I must see these events:
      | Summary | Starts At         | Ends At           |
      | Event 7 | 2024-07-07 07:00  | 2024-07-07 21:00  |

  Scenario: This Month
    When  I try to view events this month
    Then  I must see the calendar for 'June 2024':
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     |     | 1   |
      | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
      | 9   | 10  | 11  | 12  | 13  | 14  | 15  |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
      | 23  | 24  | 25  | 26  | 27  | 28  | 29  |
      | 30  |     |     |     |     |     |     |
