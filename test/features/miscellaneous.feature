Feature: Switching between mutability/immutability and types

   We want to know if mutability and switching between types works
   
   Scenario Outline: Switching List's mutability
        Given A list with three elements
        When I turn it into mutable
        And add two new elements to it
        And turn it back into an immutable List
        And add another element to it now
        Then I will have a list with 6 elements and the previous list stays with 5

    Scenario Outline: Updating List members and merging them with Sets
        Given a set, containing <e1>,<e2>,<e3> 
        And a list, containing <e4>,<e5>,<e6>,<e7> 
        When I update the first two list members by dividing them by <divider>
        And merge the updated list with the set
        Then I should get a set with <e1>,<e2>,<e3>,<e6>,<e7> 

        Examples:
            |e1 |e2 |e3 |e4 |e5 |e6 |e7 |divider|
            |2  |3  |4  |6  |8  |10 |12 |2      |
            |6  |8  |4  |6  |8  |10 |12 |1      |
            |1  |2  |4  |8  |16 |11 |14 |8      |
            |2  |3  |4  |6  |9  |10 |12 |3      |
        
           
          

       