// sumOf([1, 2, 3, 4]) => 10
const sum = function (total, number) {
  return total + number;
}

const sumOf = function (numbers) {
  return numbers.reduce(sum, 0);
}


// productOf([1, 2, 3, 4]) => 24
const multiply = function (product, multiplier) {
  return product * multiplier;
}

const productOf = function (numbers) {
  return numbers.reduce(multiply, 1);
}

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const total = numbers.reduce(sum, 0);
  return Math.floor(total / numbers.length);
}

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minimum = function (a, b) {
  return a < b ? a : b;
}

const minOf = function (numbers) {
  return numbers.reduce(minimum, Infinity);
}

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maximum = function (a, b) {
  return a > b ? a : b;
}

const maxOf = function (numbers) {
  return numbers.reduce(maximum, -Infinity);
}

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (number) {
  return number > 0;
}

const sumOfPositives = function (sum, number) {
  return isPositive(number) ? sum + number : sum;
}

const sumPositiveNumbers = function (numbers) {
  return numbers.reduce(sumOfPositives, 0);
}

// sumOfSquares([1, 2, 3, 4]) => 30
const squareOf = function (number) {
  return Math.pow(number, 2);
}

const sumOfSquares = function (numbers) {
  return numbers.map(squareOf).reduce(sum, 0);
}


// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (number) {
  return number % 2 !== 0;
}

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(sum, 0);
}

// countNegativeNumbers([1, -2, 3, -4]) => 2
const count = function (total, number) {
  return isPositive(number) ? total : total + 1;
}

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(count, 0);
}


// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const isEven = function (number) {
  return number % 2 === 0;
}

const findSumOfEvenSquares = function (numbers) {
  return numbers.filter(isEven).map(squareOf).reduce(sum, 0);
}

// concatenateWords(["hello", "world"]) => "helloworld"
const concate = function (word, string) {
  return word.concat(string);
}

const concatenateWords = function (words) {
  return words.reduce(concate, '');
}
// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const invert = function (f) {
  return function (...args) {
    return !f(...args)
  }
}

const largestString = function (string1, string2) {
  return string1.length > string2.length;
}

const longestWord = function (words) {
  const getLargestString = invert(largestString);

  return words.reduce(function (longestString, string) {
    return !getLargestString(longestString, string) ? longestString : string;
  });
}

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortestWord = function (words) {
  const getShortestString = invert(largestString);

  return words.reduce(function (shortestString, string) {
    return getShortestString(shortestString, string) ? shortestString : string;
  });
}


// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const join = function (joinedString, word) {
  return joinedString.concat(',', word);
}

const joinWithComma = function (words) {
  return words.reduce(join);
}

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) { }

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) { }

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) { }

// countVowelsInWords(["hello", "world"]) => "eoo"
const countVowelsInWords = function (words) { }

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const makeCamelCase = function (words) { }

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseString = function (words) { }

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const duplicateNumbers = function (numbers) { }

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { }

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { }

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { }

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { }

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { }

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { }

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { }

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { }

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { }

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { }

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { }

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { }

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { }

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { }

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { }

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { }

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { }

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { }

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { }

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { }

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { }

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { }

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { }

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { }

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { }

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { }

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { }

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { }

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { }

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { }

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { }

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { }

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { }

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { }

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { }
