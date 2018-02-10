const getPalindrome = require('../src/getPalindrome');

test('palindrome 3 digit terbesar adalah ', () => {
  expect(getPalindrome()).toBe(906609);
})
