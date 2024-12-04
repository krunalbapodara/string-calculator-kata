const { add } = require('./sum');

test('Returns 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('Returns the number itself when a single number is given', () => {
    expect(add("1")).toBe(1);
});

test('Returns the sum of multiple comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('Handles newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('Supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('Check if custom delimiter is specified but no newline is given', () => {
    try {
        add("//;1;2");
    } catch (e) {
        expect(e.message).toBe("Invalid format: missing newline after delimiter");
    }
});

test('Check for non-numeric values and throw an error for invalid number formats', () => {
    try {
        add("//;\na;2");
    } catch (e) {
        expect(e.message).toBe("Invalid number format: a");
    }
});

test('Throws an exception for negative numbers', () => {
    try {
        add("1,-2,3,-4");
    } catch (e) {
        expect(e.message).toBe("negative numbers not allowed: -2, -4");
    }
});