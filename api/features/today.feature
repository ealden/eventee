Feature: Today

  Scenario: Today
    Given today is '2024-06-18'
    When  I try to get what today is
    Then  I must see today as '2024-06-18'
