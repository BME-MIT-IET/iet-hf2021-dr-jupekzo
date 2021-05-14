const assert = require("assert");
const { Given, When, Then } = require("cucumber");
const { Map } = require('immutable');


//const map1 = Map({ a: 1, b: 2, c: 3 });


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