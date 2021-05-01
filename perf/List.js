/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

describe('List', function() {
  describe('builds from array', function() {
    let array2 = [];
    for (let ii = 0; ii < 2; ii++) {
      array2[ii] = ii;
    }
    
    

    it('of 2', function() {
      Immutable.List(array2);
    });

    let array8 = [];
    for (let ii = 0; ii < 8; ii++) {
      array8[ii] = ii;
    }

    it('of 8', function() {
      Immutable.List(array8);
    });

    let array32 = [];
    for (let ii = 0; ii < 32; ii++) {
      array32[ii] = ii;
    }

    it('of 32', function() {
      Immutable.List(array32);
    });

    let array1024 = [];
    for (let ii = 0; ii < 1024; ii++) {
      array1024[ii] = ii;
    }

    it('of 1024', function() {
      Immutable.List(array1024);
    });
  });

  describe('pushes into', function() {
    it('2 times', function() {
      let list = Immutable.List();
      for (let ii = 0; ii < 2; ii++) {
        list = list.push(ii);
      }
    });

    it('8 times', function() {
      let list = Immutable.List();
      for (let ii = 0; ii < 8; ii++) {
        list = list.push(ii);
      }
    });

    it('32 times', function() {
      let list = Immutable.List();
      for (let ii = 0; ii < 32; ii++) {
        list = list.push(ii);
      }
    });

    it('1024 times', function() {
      let list = Immutable.List();
      for (let ii = 0; ii < 1024; ii++) {
        list = list.push(ii);
      }
    });
  });

  describe('pushes into transient', function() {
    it('2 times', function() {
      let list = Immutable.List().asMutable();
      for (let ii = 0; ii < 2; ii++) {
        list = list.push(ii);
      }
      list = list.asImmutable();
    });

    it('8 times', function() {
      let list = Immutable.List().asMutable();
      for (let ii = 0; ii < 8; ii++) {
        list = list.push(ii);
      }
      list = list.asImmutable();
    });

    it('32 times', function() {
      let list = Immutable.List().asMutable();
      for (let ii = 0; ii < 32; ii++) {
        list = list.push(ii);
      }
      list = list.asImmutable();
    });

    it('1024 times', function() {
      let list = Immutable.List().asMutable();
      for (let ii = 0; ii < 1024; ii++) {
        list = list.push(ii);
      }
      list = list.asImmutable();
    });
  });
});
