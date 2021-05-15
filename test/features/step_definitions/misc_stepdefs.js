const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { Map, List, Set } = require('immutable');



// Scenario Outline: Switching List's mutability
Given('A list with three elements', function () {
    this.list1 = List([1,2,3]);
  });

When('I turn it into mutable', function () {
    this.list1 = this.list1.asMutable();
  });

When('add two new elements to it', function () {
    this.list1.set(3,4);
    this.list1.set(4,5);
  });

When('turn it back into an immutable List', function () {
    this.list1 = this.list1.asImmutable();
  });

When('add another element to it now', function () {
    this.list2 = this.list1.set(5,6);
  });

Then('I will have a list with {int} elements and the previous list stays with {int}', function (int, int2) {
    assert.equal(this.list1.size, int2);
    assert.equal(this.list2.size, int);
    assert.equal(this.list1.get(5), undefined);
    assert.equal(this.list2.get(5), 6);
});


//Scenario Outline: Updating List members and merging them with Sets

 Given('a set, containing {int},{int},{int}', function (int, int2, int3) {
    this.set1 = Set([int, int2, int3]);
  });

Given('a list, containing {int},{int},{int},{int}', function (int, int2, int3, int4) {
    this.list1 = List([int, int2, int3, int4]);
  });

When('I update the first two list members by dividing them by {int}', function (int) {
    this.list2 = this.list1.update(0, x => x / int).update(1, x => x / int);

  });



When('merge the updated list with the set', function () {
    this.set2 = this.set1.union(this.list2);
    
  });


  Then('I should get a set with {int},{int},{int},{int},{int}', function (int, int2, int3, int4, int5)  {
    this.set3 = List([int, int2, int3, int4, int5]).toSet();
    assert.equal(this.set2.equals(this.set3), true);
  

  });