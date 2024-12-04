const { add } = require('./sum');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});
