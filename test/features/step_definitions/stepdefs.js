const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { Map, List } = require('immutable');


//const map1 = Map({ a: 1, b: 2, c: 3 });

//Scenario Outline: Adding new elements to Maps
Given('a map with {int} element', function (int) {
    this.map1 = Map({ a: 1 });
  });


  When('I add another one to it', function () {
    this.map2 = this.map1.set('b',2);
  });


  Then('a new map should be created containing both', function () {
    assert.equal(this.map2.size, 2);
    assert.equal(this.map1.size, 1);
    assert.equal(this.map2.get("a"), 1);
    assert.equal(this.map1.get("a"), 1);
    assert.equal(this.map2.get("b"), 2);
  });


//Scenario Outline: Deleting elements
  Given('a map with {int} elements', function (int) {
    this.map1 = Map({ a: 1, b : 2, c : 3 });
    });
  When('I delete one from it', function () {
     this.map2 = this.map1.delete("c");
    });
  Then('a new map should be created containing the {int} leftovers', function (int) {
    assert.equal(this.map2.size, 2);
    assert.equal(this.map1.size, 3);
    assert.equal(this.map2.get("a"), 1);
    assert.equal(this.map1.get("a"), 1);
    assert.equal(this.map2.get("b"), 2);
    assert.equal(this.map1.get("b"), 2);
    assert.equal(this.map1.get("c"), 3);
    });


//Scenario Outline: Merging maps
    Given('two maps, one with {int} elements and another with {int}', function (int, int2) {
      this.map1 = Map({ a: 1, b : 2, c : 3 });
      this.map2 = Map({ d: 1, e : 2});
      });
    When('I merge them', function () {
       this.map3 = this.map1.merge(this.map2);
      });
    Then('a new map should be created containing all the entries', function () {
      assert.equal(this.map2.size, 2);
      assert.equal(this.map1.size, 3);
      assert.equal(this.map3.size, 5);
      assert.equal(this.map3.get("e"), this.map2.get("e"));
      });



//Scenario Outline: Clearing Map data and switching between mutability
      Given('a map with {int} values', function (int) {
        this.paramCount = int;
        this.tempMap = Map().asMutable();
        for (i = 0; i < this.paramCount; i++) {
          this.tempMap.set("a"+i, i);

        }
         this.map1 = this.tempMap.asImmutable();

        /* this.map1.map((key, value) => {
          console.log(key, value)
        })*/
      }
      
      );
       
    
      When('I clear its data', function () {
        this.map2 = this.map1.clear();
      });

      When('I set it to become mutable', function () {
        this.map2 = this.map2.asImmutable();
      });

      When('add {int} values to the mutable one', function (int) {
        this.paramCount2 = int;
        this.tempMap2 = Map().asMutable();
        for (i = 0; i < this.paramCount2; i++) {
          this.tempMap2.set("a"+i, i);

        }
       
        });

        When('make it immutable', function () {
          this.map2 = this.tempMap2.asImmutable();
        });

        When('add another value to it', function () {
          this.map3 = this.map2.set("aUtolso", 10);
        });

        Then('Three immutable maps should be present: the original with six values, a second map with two and a third with three values', function () {
          assert.equal(this.map1.size, this.paramCount);
          assert.equal(this.map2.size, this.paramCount2); 
          assert.equal(this.map3.size, this.paramCount2+1);
          });

  //Scenario Outline: "Concatenating different types of iterables"    
   Given('a map with four elements, a list with {int} and an array with {int}', function (int, int2) {
    this.map1 = Map({ a: 3, b: 4, c: 5, d: 6 });
    this.list = List([ 1, 2]);
    this.array = [ 7, 8, 9, 10];
   });

   When('we concatenate the list and the array', function () {
      this.list2 = this.list.concat(this.array);
   });

   When('merge the array to these two', function () {
       this.map2 = this.map1.merge(this.list2.toMap());
  });

  Then('we should get a map with {int} elements', function (int) {
    assert.equal(this.map2.size, int);
    assert.equal(this.list2.size, 6);
    });

         
          
          

       