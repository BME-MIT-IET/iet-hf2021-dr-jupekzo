Feature: Adding to list


    We want to know if the List behaves as it should

    Scenario Outline: Adding new elements to the List
        Given The first test list with 1 element
        When Set the first element
        Then A new list should be created containing the second value

    Scenario Outline: Remove element from the List
        Given The second test list with 2 element
        When Remove the second element
        Then A new list should be created containing the first value
    
    Scenario Outline: Insert element to the List
        Given The third test list with 2 element
        When Instert the third element
        Then A new list should be created containing the three value
    
    Scenario Outline: Push elements to the List
        Given The fourth test list with 2 element
        When Push elements to the list
        Then A new list should be created containing all the pushed value

    Scenario Outline: Clear elements from the List
        Given The fifth test list with 2 element
        When Clear elements from the list
        Then A new list should be created containing no values
    
    Scenario Outline: Pop elements from the List
        Given The sixth test list with 2 element
        When Pop element from the list
        Then A new list should be created containing the poped value
    
    Scenario Outline: Unshift the elements and concat the two list
        Given The seventh test list with 2 element
        When Unshift element from the list
        And Concat the two list
        Then A new list should be created containing the two list
    
    Scenario Outline: Apply a series of mutations locally before returning
        Given The eighth test list with 2 element
        When Apply a series of mutations
        Then A new list should be created containing the mutations