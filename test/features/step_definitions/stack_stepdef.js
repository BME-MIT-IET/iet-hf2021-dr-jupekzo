const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { Stack } = require('immutable');

//Scenario Outline: Adding new elements to the List

Given('The first test stack with {int} element', function (int) {
    this.stack1 = Stack([1, 2]);
});


When('Unshift elements to the stack', function () {
    this.stack2 = this.stack1.unshift([0, 2, 3], 2);
});

Then('A new stack should be created containing the values', function () {
    assert.equal(this.stack1.size, 2);
    assert.equal(this.stack2.size, 4);
    assert.equal(this.stack1.peek(), 1);
});

//Scenario Outline: Apply a series of mutations turning the stack mutable


Given('The second test stack with {int} element', function (int) {
    this.stack1 = Stack([7, 9]).asMutable();
});

When('Unshift elements in the same stack', function () {
    this.stack1.unshift(7, 9);
});

When('Shift elements in the same stack', function () {
    this.stack1.shift();
});

Then('The stack changes', function () {
    assert.equal(this.stack1.size, 3);
    assert.equal(this.stack1.wasAltered(), true);
});

//Scenario Outline: Apply a series of mutations withMutations

Given('The third test stack with {int} element', function (int) {
    this.stack1 = Stack([7, 9]);
});

When('Unshift elements and shift them', function () {
    this.stack2 = this.stack1.withMutations(function (stack) {
        stack.unshift(7, 9).shift();
      });
    console.log(this.stack2.toString());
});

Then('A new stack should be created containing all the values, like when it was mutable', function () {
    assert.equal(this.stack2.size, 3);
    assert.equal(this.stack1.wasAltered(), false);
    assert.equal(this.stack2.wasAltered(), false);
    assert.equal(this.stack2.peek(), 9);
});

