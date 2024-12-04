function add(numbers) {
    // Handle empty string
    if (numbers === "") {
        return 0;
    }
    let delimiter = ",";
    let customDelimiterPattern = /^\/\/([^\s])\n/;

    const match = numbers.match(customDelimiterPattern);
    // Check if custom delimiter is specified but no newline is given
    if (numbers.startsWith("//") && !match) {
        throw new Error("Invalid format: missing newline after delimiter");
    }

    // Handle custom delimiter(s)
    if (match) {
        delimiter = match[1]; // Extract the delimiter
        numbers = numbers.replace(match[0], ''); // Remove the `//[delimiter]\n` part
    }

    numbers = numbers.replace(/\n/g, delimiter); // Replace newlines with the delimiter
    const numberArray = numbers.split(delimiter);

    // Check for non-numeric values and throw an error for invalid number formats
    const invalidNumbers = numberArray.filter(num => isNaN(num) && num !== '');
    if (invalidNumbers.length > 0) {
        throw new Error("Invalid number format: " + invalidNumbers.join(","));
    }

    // Check for negative numbers and throw an exception if any are found
    const negatives = numberArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }

    // Sum
    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
