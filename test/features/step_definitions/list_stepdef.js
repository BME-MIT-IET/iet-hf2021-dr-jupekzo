const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { List } = require('immutable');

//Scenario Outline: Adding new elements to the List

Given('The first test list with {int} element', function (int) {
    this.list1 = List([1]);
});


When('Set the first element', function () {
    this.list2 = this.list1.set(0,2);
});

Then('A new list should be created containing the second value', function () {
    assert.equal(this.list1.size, 1);
    assert.equal(this.list2.size, 1);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list2.get(0), 2);
});

// Scenario Outline: Remove element from the List

Given('The second test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Remove the second element', function () {
    this.list2 = this.list1.remove(1);
});

Then('A new list should be created containing the first value', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 1);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list1.get(1), 2);
    assert.equal(this.list2.get(0), 1);
});

//Scenario Outline: Insert element to the List

Given('The third test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Instert the third element', function () {
    this.list2 = this.list1.insert(2,4);
});

Then('A new list should be created containing the three value', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 3);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list1.get(1), 2);
    assert.equal(this.list2.get(0), 1);
    assert.equal(this.list2.get(1), 2);
    assert.equal(this.list2.get(2), 4);
});

//Scenario Outline: Push elements to the List

Given('The fourth test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Push elements to the list', function () {
    this.list2 = this.list1.push(3,7,9);
});

Then('A new list should be created containing all the pushed value', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 5);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list1.get(1), 2);
    assert.equal(this.list2.get(0), 1);
    assert.equal(this.list2.get(1), 2);
    assert.equal(this.list2.get(2), 3);
    assert.equal(this.list2.get(3), 7);
    assert.equal(this.list2.get(4), 9);
});

//Scenario Outline: Clear elements from the List

Given('The fifth test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Clear elements from the list', function () {
    this.list2 = this.list1.clear();
});

Then('A new list should be created containing no values', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 0);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list1.get(1), 2);
});

//Scenario Outline: Pop elements from the List

Given('The sixth test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Pop element from the list', function () {
    this.list2 = this.list1.pop();
});

Then('A new list should be created containing the poped value', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 1);
    assert.equal(this.list1.get(0), 1);
    assert.equal(this.list1.get(1), 2);
    assert.equal(this.list2.get(0), 1);
});

//Scenario Outline: Unshift the elements and concat the two list

Given('The seventh test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Unshift element from the list', function () {
    this.list2 = this.list1.unshift(3);
});

When('Concat the two list', function () {
    this.list3 = this.list1.concat(this.list2);
});

Then('A new list should be created containing the two list', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 3);
    assert.equal(this.list3.size, 5);
    assert.equal(this.list2.get(0), 3);
});

//Scenario Outline: Apply a series of mutations locally before returning

Given('The eighth test list with {int} element', function (int) {
    this.list1 = List([1, 2]);
});


When('Apply a series of mutations', function () {
    this.list2 = this.list1.withMutations(function (list) {
        list.push(3).push(7).push(9).remove(0);
      });
});

Then('A new list should be created containing the mutations', function () {
    assert.equal(this.list1.size, 2);
    assert.equal(this.list2.size, 4);
    assert.equal(this.list2.get(0), 2);
    assert.equal(this.list2.get(1), 3);
    assert.equal(this.list2.get(2), 7);
    assert.equal(this.list2.get(3), 9);
});
