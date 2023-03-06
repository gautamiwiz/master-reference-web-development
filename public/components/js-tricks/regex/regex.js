//console.log("gScript Loaded");

let string1 = "Hello this this is a string";
let string2 = "hello this is another string";
let string3 = "This is another hello string.";
let string4 = "Completely different string for HElloing";
let string5 = "HELLO My name is gautam sharma ingg.";

console.log("");
console.log("String 1 = ", string1);
console.log("String 2 = ", string2);
console.log("String 3 = ", string3);
console.log("String 4 = ", string4);
console.log("String 5 = ", string5);
console.log("");

/**
 * The .match() vs .test()
 *
 * .test() returns true or false
 * .test() is used as regex.test(string)
 *
 * .match() returns as array if matched or returns null
 * .match() us used as string.match(regex)
 *
 */

//this is a pattern that detects the word "this in any sentance : case sensitive"
var regex = /this/;
//console.log(regex.test(string1));
//console.log(string1.match(regex));
//console.log("");

//detects the word "this" at any position, in any case"
var regex2 = /this/i;
// console.log("String 1 - /this/i", regex2.test(string1));
// console.log("String 3 - /this/i", regex2.test(string3));
// console.log("String 3 - /this/ ", regex.test(string3));

// console.log("String 1 - /this/i", string1.match(regex2));
// console.log("String 3 - /this/i", string3.match(regex2));
// console.log("String 3 - /this/ ", string3.match(regex));

// console.log("");

//detects the word "this" at the start, in any case.
var regex3 = /^this/i;

// console.log("String 1 - /^this/i", regex3.test(string1));
// console.log("String 2 - /^this/i", regex3.test(string2));
// console.log("String 3 - /^this/i", regex3.test(string3));
// console.log("");

//detects the word "hello" at the start, in any case.
var regex4 = /^hello/i;
// console.log("String 1 - /^hello/i", regex4.test(string1));
// console.log("String 2 - /^hello/i", regex4.test(string2));
// console.log("String 3 - /^hello/i", regex4.test(string3));
// console.log("String 4 - /^hello/i", regex4.test(string4));
// console.log("String 5 - /^hello/i", regex4.test(string5));
// console.log("");

//detects the word "ing" in any sentance at the end, in any case.
var regex5 = /ing$/i;
// console.log("String 1 - /ing$/i", regex5.test(string1));
// console.log("String 2 - /ing$/i", regex5.test(string2));
// console.log("String 3 - /ing$/i", regex5.test(string3));
// console.log("String 4 - /ing$/i", regex5.test(string4));
// console.log("String 5 - /ing$/i", regex5.test(string5));
// console.log("");

//detects the word "ing" followed by any character
//the . in th end is any character. It doesn not check for "." ...... its for any character in the end
let regex6 = /ing.$/i;
// console.log("String 1 - /ing.$/i", regex6.test(string1));
// console.log("String 2 - /ing.$/i", regex6.test(string2));
// console.log("String 3 - /ing.$/i", regex6.test(string3));
// console.log("String 4 - /ing.$/i", regex6.test(string4));
// console.log("String 5 - /ing.$/i", regex6.test(string5));
// console.log("");

//detects the word "ing" with "." in the end \ is to escape
let regex7 = /ing\.$/;
// console.log("String 1 - /ing.$/", regex7.test(string1));
// console.log("String 2 - /ing.$/", regex7.test(string2));
// console.log("String 3 - /ing.$/", regex7.test(string3));
// console.log("String 4 - /ing.$/", regex7.test(string4));
// console.log("String 5 - /ing.$/", regex7.test(string5));
// console.log("");

//does it end with ingg or ing
let regex8 = /ingg?$/;
// console.log("String 1 - /ing?g$/", regex8.test(string1));
// console.log("String 2 - /ing?g$/", regex8.test(string2));
// console.log("String 3 - /ing?g$/", regex8.test(string3));
// console.log("String 4 - /ing?g$/", regex8.test(string4));
// console.log("String 5 - /ing?g$/", regex8.test(string5));
// console.log("");

//does it end with ingg or ingg.
let regex9 = /ingg?\.?$/;
// console.log("String 1 - /ing?g?.$/", regex9.test(string1));
// console.log("String 2 - /ing?g?.$/", regex9.test(string2));
// console.log("String 3 - /ing?g?.$/", regex9.test(string3));
// console.log("String 4 - /ing?g?.$/", regex9.test(string4));
// console.log("String 5 - /ing?g?.$/", regex9.test(string5));
// console.log("");

//does it end with ing or ing. or ingg or ingg.
// the ? make it not mandatory
let regex10 = /ing?[?g|?\.]?.$/;
// console.log("String 1 - /ing?[?g|?.]?.$/", regex10.test(string1));
// console.log("String 2 - /ing?[?g|?.]?.$/", regex10.test(string2));
// console.log("String 3 - /ing?[?g|?.]?.$/", regex10.test(string3));
// console.log("String 4 - /ing?[?g|?.]?.$/", regex10.test(string4));
// console.log("String 5 - /ing?[?g|?.]?.$/", regex10.test(string5));
// console.log("");

// doe it haev alphanumeric characters
let regex11 = /[a-zA-Z0-9]/;
//console.log("String 1 - /[a-zA-Z0-9]/", regex11.test(string1));

// doe it start with hello
let regex12 = /^hello/i;
//console.log("String 1 - /^hello/i", regex12.test(string1));

let stringTest = "cat cit cod";
let regex13 = /c.t/;
//console.log(regex13.test(stringTest));
//console.log(stringTest.match(regex13));

let regex14 = /c.t/g;
//console.log(regex14.test(stringTest));
//console.log(stringTest.match(regex14));

let regex15 = /a[bcdef]z/;
// console.log(regex15.test("abc"));
// console.log(regex15.test("acz"));
// console.log(regex15.test("adz"));
// console.log(regex15.test("aez"));
// console.log(regex15.test("afz"));
// console.log(regex15.test("agz"));

let regex16 = /a?[b|c|d|e|f]?./;
// console.log(regex16.test("abc"));
// console.log(regex16.test("a"));
// console.log(regex16.test("ab"));

let regex17 = /a[b-d]/i;
// console.log(regex17.test("a"));
// console.log(regex17.test("ab ab"));
// console.log(regex17.test("ab az"));
// console.log(regex17.test("ac ab"));
// console.log(regex17.test("ac ad"));

let regex18 = /a[b-d]/gi;
// console.log(regex18.test("a"));
// console.log(regex18.test("ab ab ab"));
// console.log(regex18.test("ab az az"));
// console.log(regex18.test("ac ab ad"));
// console.log(regex18.test("ac ad ab"));

let regex19 = /[^aeiou]/;

// console.log(regex19.test("a"));
// console.log(regex19.test("aeiou"));
// console.log(regex19.test("aeioub"));
// console.log(regex19.test("b"));
// console.log(regex19.test("abc"));
// console.log(regex19.test("bcd"));
// console.log(regex19.test("abc abc"));
// console.log(regex19.test("bcd bcd"));

let regex20 = /a+/g;

// console.log(regex20.test("a"));
// console.log(regex20.test("aa"));
// console.log(regex20.test("ab"));
// console.log(regex20.test("ab aa"));
// console.log(regex20.test("a a b"));

/*
Match All Letters and Numbers
[A-Za-z0-9_] 
or
[\w+]

Match Everything But Letters and Numbers
You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. 
This shortcut is the same as [^A-Za-z0-9_].


*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";

// console.log(longHand.test(numbers));
// console.log(shortHand.test(numbers));
// console.log(longHand.test(varNames));
// console.log(shortHand.test(varNames));

/**
 * Match All Numbers : /\d/
This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

Match All Non-Numbers : \D
\D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
 */

/**
 * Usernames can only use alpha-numeric characters.
 * The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
 * Username letters can be lowercase and uppercase.
 * Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
 */
/*
Code Explanation
^ - start of input
[a-z] - first character is a letter
[a-z]+ - following characters are letters
\d*$ - input ends with 0 or more digits
| - or
^[a-z] - first character is a letter
\d\d+ - following characters are 2 or more digits
$ - end of input
 */
let regex21 = /^[a-z][a-z]+\d*$/i;
//console.log(regex21.test("aa1"));

/*
solution 2
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9]{2,0} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input

*/

/**
 * Match Whitespace
 * You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace,
 * but also carriage return, tab, form feed, and new line characters. You can think of
 * it as similar to the character class [ \r\t\f\n\v].
 * let whiteSpace = "Whitespace. Whitespace everywhere!"
 * let spaceRegex = /\s/g;
 * whiteSpace.match(spaceRegex);
 * This match call would return [" ", " "].
 *
 *
 * Match Non-Whitespace Characters
 * You can think of it being similar to the character class [^ \r\t\f\n\v].
 * let whiteSpace = "Whitespace. Whitespace everywhere!"
 * let nonSpaceRegex = /\S/g;
 * whiteSpace.match(nonSpaceRegex).length;
 * The value returned by the .length method would be 32.
 */

/**
 * Specify Upper and Lower Number of Matches
 * let A4 = "aaaah";
 * let A2 = "aah";
 * let multipleA = /a{3,5}h/;
 * multipleA.test(A4);
 * multipleA.test(A2);
 * The first test call would return true, while the second would return false.
 */

/**
 * Specify Only the Lower Number of Matches
 * let A4 = "haaaah";
 * let A2 = "haah";
 * let A100 = "h" + "a".repeat(100) + "h";
 * let multipleA = /ha{3,}h/;
 * multipleA.test(A4);
 * multipleA.test(A2);
 * multipleA.test(A100);
 * In order, the three test calls would return true, false, and true.
 */

/**
 * Specify Exact Number of Matches
 * let A4 = "haaaah";
 * let A3 = "haaah";
 * let A100 = "h" + "a".repeat(100) + "h";
 * let multipleHA = /ha{3}h/;
 * multipleHA.test(A4);
 * multipleHA.test(A3);
 * multipleHA.test(A100);
 * In order, the three test calls would return false, true, and false.
 */

/**
 * Check for All or None
 * let american = "color";let british = "colour";
 * let rainbowRegex= /colou?r/;
 * rainbowRegex.test(american);
 * rainbowRegex.test(british);
 */

/**
 * Positive and Negative Lookahead
 * A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
 * On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
 * let quit = "qu";
 * let noquit = "qt";
 * let quRegex= /q(?=u)/;
 * let qRegex = /q(?!u)/;
 * quit.match(quRegex);
 * noquit.match(qRegex);
 * 
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 * let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);
 */

/**
 * Check For Mixed Grouping of Characters
If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g


 */

/**
 * Reuse Patterns Using Capture Groups
 * 

 */

//  let regex9 = /ingg?\.?$/;
//  console.log("String 1 - /ing?g?.$/", regex9.test(string1));
//  console.log("String 2 - /ing?g?.$/", regex9.test(string2));
//  console.log("String 3 - /ing?g?.$/", regex9.test(string3));
//  console.log("String 4 - /ing?g?.$/", regex9.test(string4));
//  console.log("String 5 - /ing?g?.$/", regex9.test(string5));
console.log("");
