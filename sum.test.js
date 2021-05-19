const { expect } = require('@jest/globals');
const sum = require('./sum');

test('subtract 2 - 1 to equal 1',()=> {
  expect(sum(2,1)).toBe(1);
});