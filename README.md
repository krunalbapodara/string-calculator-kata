# String Calculator Kata

This is a simple implementation of a string calculator, written in JavaScript using Test-Driven Development (TDD). The calculator is designed to handle a series of comma-separated numbers (and supports additional delimiters and edge cases).

## Requirements

The `add` function should implement the following behavior:

### 1. **Empty String**  
If the input string is empty, it should return `0`.

**Example:**
```javascript
add("");  // Returns: 0
```

### 2. **Single Number**

If the input string contains just one number, the function should return that number.

**Example:**

```javascript
add("1");  // Returns: 1
```

### 3. **Multiple Numbers (Comma-Separated)**
If the input string contains multiple numbers separated by commas, the function should return the sum of those numbers.

**Example:**

```javascript
add("1,2");  // Returns: 3
```

### 4. **Newline as Delimiter**
The function should allow for newlines (\n) between numbers as an alternative delimiter. The input string can contain both commas and newlines.

**Example:**

```javascript
add("1\n2,3");  // Returns: 6
```

### 5. **Custom Delimiters**
The function should support custom delimiters. The custom delimiter will be specified at the beginning of the input string in the format //[delimiter]\n[numbers].

**Example:**

```javascript
add("//;\n1;2");  // Returns: 3
```
If \n is not given after custom delimiter, it will throw exception.

### 6. **Custom Delimiters**
If the custom delimiter is *, then instead of sum, it should do multiplication of the numbers.

**Example:**

```javascript
add("//*\n4*2");  // Returns: 8
```

### 7. **Negative Numbers**
The function should throw an exception if any negative numbers are present in the input string. The exception should list all negative numbers found in the input.

**Example:**

```javascript
add("1,-2,3,-4");  
// Throws Error: "negative numbers not allowed: -2, -4"
```

<br/>
<br/>

# How to Run the Code

## Clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/string-calculator.git
cd string-calculator
```
## Install dependencies:

```bash
npm install
```

## Run the tests:

```bash
npm test
```
Jest will run all tests, and you should see output indicating whether all tests have passed.

## Playground to manually add custom delimiter and number string as user input:

```bash
npm start
```
Note: \n will not work as delimiter when taking input from user.
