function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = ",";

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        delimiter = numbers[2]; // Extract the delimiter
        numbers = numbers.slice(4); // Remove the `//[delimiter]\n` part
    }

    numbers = numbers.replace(/\n/g, delimiter); // Replace newlines with the custom delimiter
    const numberArray = numbers.split(delimiter);
    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
