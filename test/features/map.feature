Feature: Map functions


    We want to know if the Map behaves as it should

    Scenario Outline: Adding new elements to Maps
        Given a map with 1 element
        When I add another one to it
        Then a new map should be created containing both
    
    Scenario Outline: Deleting elements
        Given a map with 3 elements
        When I delete one from it
        Then a new map should be created containing the 2 leftovers

    Scenario Outline: Merging maps
        Given two maps, one with 3 elements and another with 2
        When I merge them
        Then a new map should be created containing all the entries
   
    Scenario Outline: Clearing Map data and switching between mutability
        Given a map with 6 values
        When I clear its data
        And I set it to become mutable
        And add 2 values to the mutable one
        And make it immutable
        And add another value to it
        Then Three immutable maps should be present: the original with six values, a second map with two and a third with three values

    Scenario Outline: "Concatenating different types of iterables"
        Given a map with four elements, a list with 2 and an array with 4
        When we concatenate the list and the array
        And merge the array to these two
        Then we should get a map with 10 elements