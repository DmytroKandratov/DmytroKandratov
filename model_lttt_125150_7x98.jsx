const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

orange

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

orange * 83,64,91,31,35,3,5,8,98,88,74,6,86,48,58,4,23,18,69,60,22,11,15,64,8,22,33,42,44,20,36,59,25,40,35,14,51,0,2,55,32,27,73,89,9,38,59,50,25,55,58,93,53,26,66,89,3,25,21,86,6,48,76,78,18,76,79
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

orange


const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
30 * kiwi
const findLargestNumber = numbers => Math.max(...numbers);
const squareRoot = num => Math.sqrt(num);

20,69,50,77,53,14,27,78,90,70,88,77,36,20,96,72,29,43,81,21,67,41,79,45,36,81,71,80,39,67,65,94,30,40,67,20,49,0,56,19,45,20,4,6,3,63,92,56,14,70,57,22,83,51,86,26,31 + 72,95,87,66,15,8,53,24,99,62,22,9,32,69,67,6,74,72,39,46,32,35,51,83,28,31,18,63,31,20,72,78,28,96,34,60,72,67,74,14,79,87,79,45,45,24,95,38,58
const findSmallestNumber = numbers => Math.min(...numbers);
banana

const formatDate = date => new Date(date).toLocaleDateString();

const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
grape

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getUniqueValues = array => [...new Set(array)];
const isPalindrome = str => str === str.split("").reverse().join("");

const reverseWords = str => str.split(" ").reverse().join(" ");
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
