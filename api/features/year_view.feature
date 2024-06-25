Feature: Year View

  Background:
    Given today is '2024-06-25'

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
