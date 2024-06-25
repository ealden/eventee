Feature: Year View

  Background:
    Given today is '2024-06-25'
    And   I have these existing events:
      | Summary | Starts At         | Ends At           |
      | Event 1 | 2024-06-14 14:00  | 2024-06-14 15:00  |
      | Event 2 | 2024-06-14 15:00  | 2024-06-14 16:00  |
      | Event 3 | 2024-06-14 17:00  | 2024-06-14 18:00  |
      | Event 4 | 2024-06-17 14:00  | 2024-06-17 20:00  |
      | Event 5 | 2024-06-30 12:00  | 2024-06-30 18:00  |
      | Event 6 | 2024-05-07 09:00  | 2024-05-07 17:00  |
      | Event 7 | 2024-07-07 07:00  | 2024-07-07 21:00  |

  Scenario: Year View
    When  I try to view events in year view
    Then  I must see the calendar for '2024'
    And   I must see this calendar for month 1:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     | 1   | 2   | 3   | 4   | 5   | 6   |
      | 7   | 8   | 9   | 10  | 11  | 12  | 13  |
      | 14  | 15  | 16  | 17  | 18  | 19  | 20  |
      | 21  | 22  | 23  | 24  | 25  | 26  | 27  |
      | 28  | 29  | 30  | 31  |     |     |     |
    And   I must see this calendar for month 2:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     | 1   | 2   | 3   |
      | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
      | 11  | 12  | 13  | 14  | 15  | 16  | 17  |
      | 18  | 19  | 20  | 21  | 22  | 23  | 24  |
      | 25  | 26  | 27  | 28  | 29  |     |     |
    And   I must see this calendar for month 3:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     | 1   | 2   |
      | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
      | 10  | 11  | 12  | 13  | 14  | 15  | 16  |
      | 17  | 18  | 19  | 20  | 21  | 22  | 23  |
      | 24  | 25  | 26  | 27  | 28  | 29  | 30  |
      | 31  |     |     |     |     |     |     |
    And   I must see this calendar for month 4:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     | 1   | 2   | 3   | 4   | 5   | 6   |
      | 7   | 8   | 9   | 10  | 11  | 12  | 13  |
      | 14  | 15  | 16  | 17  | 18  | 19  | 20  |
      | 21  | 22  | 23  | 24  | 25  | 26  | 27  |
      | 28  | 29  | 30  |     |     |     |     |
    And   I must see this calendar for month 5:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     | 1   | 2   | 3   | 4   |
      | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
      | 12  | 13  | 14  | 15  | 16  | 17  | 18  |
      | 19  | 20  | 21  | 22  | 23  | 24  | 25  |
      | 26  | 27  | 28  | 29  | 30  | 31  |     |
    And   I must see this calendar for month 6:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     |     | 1   |
      | 2   | 3   | 4   | 5   | 6   | 7   | 8   |
      | 9   | 10  | 11  | 12  | 13  | 14  | 15  |
      | 16  | 17  | 18  | 19  | 20  | 21  | 22  |
      | 23  | 24  | 25  | 26  | 27  | 28  | 29  |
      | 30  |     |     |     |     |     |     |
    And   I must see this calendar for month 7:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     | 1   | 2   | 3   | 4   | 5   | 6   |
      | 7   | 8   | 9   | 10  | 11  | 12  | 13  |
      | 14  | 15  | 16  | 17  | 18  | 19  | 20  |
      | 21  | 22  | 23  | 24  | 25  | 26  | 27  |
      | 28  | 29  | 30  | 31  |     |     |     |
    And   I must see this calendar for month 8:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     | 1   | 2   | 3   |
      | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
      | 11  | 12  | 13  | 14  | 15  | 16  | 17  |
      | 18  | 19  | 20  | 21  | 22  | 23  | 24  |
      | 25  | 26  | 27  | 28  | 29  | 30  | 31  |
    And   I must see this calendar for month 9:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
      | 8   | 9   | 10  | 11  | 12  | 13  | 14  |
      | 15  | 16  | 17  | 18  | 19  | 20  | 21  |
      | 22  | 23  | 24  | 25  | 26  | 27  | 28  |
      | 29  | 30  |     |     |     |     |     |
    And   I must see this calendar for month 10:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     | 1   | 2   | 3   | 4   | 5   |
      | 6   | 7   | 8   | 9   | 10  | 11  | 12  |
      | 13  | 14  | 15  | 16  | 17  | 18  | 19  |
      | 20  | 21  | 22  | 23  | 24  | 25  | 26  |
      | 27  | 28  | 29  | 30  | 31  |     |     |
    And   I must see this calendar for month 11:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     | 1   | 2   |
      | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
      | 10  | 11  | 12  | 13  | 14  | 15  | 16  |
      | 17  | 18  | 19  | 20  | 21  | 22  | 23  |
      | 24  | 25  | 26  | 27  | 28  | 29  | 30  |
    And   I must see this calendar for month 12:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      | 1   | 2   | 3   | 4   | 5   | 6   | 7   |
      | 8   | 9   | 10  | 11  | 12  | 13  | 14  |
      | 15  | 16  | 17  | 18  | 19  | 20  | 21  |
      | 22  | 23  | 24  | 25  | 26  | 27  | 28  |
      | 29  | 30  | 31  |     |     |     |     |
    And   I must see these days have events:
      | Day with Events |
      | 2024-05-07      |
      | 2024-06-14      |
      | 2024-06-17      |
      | 2024-06-30      |
      | 2024-07-07      |

  Scenario: Last Year
    When  I try to view events last year
    Then  I must see the calendar for '2023'
    And   I must see this calendar for month 12:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     |     |     | 1   | 2   |
      | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
      | 10  | 11  | 12  | 13  | 14  | 15  | 16  |
      | 17  | 18  | 19  | 20  | 21  | 22  | 23  |
      | 24  | 25  | 26  | 27  | 28  | 29  | 30  |
      | 31  |     |     |     |     |     |     |

  Scenario: Next Year
    When  I try to view events next year
    Then  I must see the calendar for '2025'
    And   I must see this calendar for month 1:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     |     |     | 1   | 2   | 3   | 4   |
      | 5   | 6   | 7   | 8   | 9   | 10  | 11  |
      | 12  | 13  | 14  | 15  | 16  | 17  | 18  |
      | 19  | 20  | 21  | 22  | 23  | 24  | 25  |
      | 26  | 27  | 28  | 29  | 30  | 31  |     |

  Scenario: This Year
    When  I try to view events this year
    Then  I must see the calendar for '2024'
    And   I must see this calendar for month 1:
      | Sun | Mon | Tue | Wed | Thu | Fri | Sat |
      |     | 1   | 2   | 3   | 4   | 5   | 6   |
      | 7   | 8   | 9   | 10  | 11  | 12  | 13  |
      | 14  | 15  | 16  | 17  | 18  | 19  | 20  |
      | 21  | 22  | 23  | 24  | 25  | 26  | 27  |
      | 28  | 29  | 30  | 31  |     |     |     |
