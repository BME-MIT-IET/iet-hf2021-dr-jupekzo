Feature: Adding to map


    We want to know if a new map object is created containing the added element

    Scenario Outline: Adding new elements to Maps
        Given a map with 1 element
        When I add another one to it
        Then a new map should be created containing both



   
        