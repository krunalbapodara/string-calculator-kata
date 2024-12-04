const { add } = require('./sum');

test('returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('returns the number itself when a single number is given', () => {
    expect(add("1")).toBe(1);
});

test('returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});
