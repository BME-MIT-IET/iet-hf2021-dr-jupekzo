Feature: Testing Stack behaviour


    We want to know if the Stack behaves as it should

    Scenario Outline: Adding new elements to the Stack and set it to another value
        Given The first test stack with 2 element
        When Unshift elements to the stack
        Then A new stack should be created containing the values

    Scenario Outline: Apply a series of mutations turning the stack mutable
        Given The second test stack with 2 element
        When Unshift elements in the same stack
        And Shift elements in the same stack
        Then The stack changes

    Scenario Outline: Apply a series of mutations withMutations
        Given The third test stack with 2 element
        When Unshift elements and shift them
        Then A new stack should be created containing all the values, like when it was mutable