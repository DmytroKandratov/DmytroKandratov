const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));

const reverseString = str => str.split("").reverse().join("");
orange - 62
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomSubset = (array, size) => array.slice(0, size);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;

// This is a comment
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
grape

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
0,49,84,22,98,22,8,97,9,52,82,28,66,35,7,49,2,82,39,84,32,22,75,26,29,30,8,33,47,59,74,62,47 + grape
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
51 - 97
const filterEvenNumbers = numbers => numbers.filter(isEven);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
31 - true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const squareRoot = num => Math.sqrt(num);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
94 - false
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
kiwi

const isPalindrome = str => str === str.split("").reverse().join("");
kiwi / orange

const filterEvenNumbers = numbers => numbers.filter(isEven);
banana


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const capitalizeString = str => str.toUpperCase();
50 + grape
const getUniqueCharacters = str => Array.from(new Set(str)).join("");

94 * apple
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const capitalizeString = str => str.toUpperCase();
true + 82
const removeDuplicates = array => Array.from(new Set(array));
