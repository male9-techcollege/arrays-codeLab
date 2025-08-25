/* Opgaver 1 til 2 */
/* let myArray = ['element1', 'element2', 'element3'];
let myPartArray = ['partElement1', 'partElement2', 'PartElement3'];
*/
let myArrayByMariePierreLessard = ['element1', 'element2', 'element3'];
let myPartArrayByMariePierreLessard = ['partElement1', 'partElement2', 'PartElement3'];

//.........................................................

// opgave 1 tilføj element4 til enden myArray
//Ref.: 

// din kode her...
myArrayByMariePierreLessard.push('element4');
console.log(myArrayByMariePierreLessard);
//Checked in console

// opgave 1 fjern element4 igen
//Ref.:

// din kode her...
myArrayByMariePierreLessard.pop('element4');
console.log(myArrayByMariePierreLessard);
//Checked in console

//.........................................................

// opgave 2 tilføj element4 til starten myArray
//Ref.:

// din kode her...
myArrayByMariePierreLessard.unshift('element4');
console.log(myArrayByMariePierreLessard);
//Checked in console; element4 is indeed at the beginning of the array acc. to JavaScript line 29.

// opgave 2 fjern element4 igen
//Ref.:

// din kode her...
myArrayByMariePierreLessard.shift('element4');
console.log(myArrayByMariePierreLessard);
//Checked in console

//.........................................................

/* Opgaver 3 til 5 */
/* let myFruits = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
let myVegetables = ['salat', 'blomkål', 'spidskål', 'agurk']; 
*/
let myFruitsByMariePierreLessard = ['æble', 'pære', 'banan', 'appelsin', 'citron'];
let myVegetablesByMariePierreLessard = ['salat', 'blomkål', 'spidskål', 'agurk'];

//.........................................................

/* opgave 3 splice()
 tilføj mandarin og fersken efter pære i myFruits
 */
//Ref.: https://www.w3schools.com/jsref/jsref_splice.asp (this is also explained in HTML file)
//Notes: 
// - The first parameter is the index. The addition or removal will occur BEFORE that index. The count does start at 0.
// - The 2nd parameter is the "Number of items to be removed."
// - The 3rd parameter is "The new elements(s) to be added." Either written as 'mandarin', 'fersken' or as ['mandarin', 'fersken'] in this assignment. The problem with the 2nd option is that the console log does't give the content of the array. It just says that there is an array there.

// din kode her...
/* What the teacher probably wants */
myFruitsByMariePierreLessard.splice(2, 0, 'mandarin', 'fersken');
console.log(myFruitsByMariePierreLessard);
//Checked in console

/* Another way to do it */
//myFruitsByMariePierreLessard.splice(2, 0, ['mandarin', 'fersken']);
//console.log(myFruitsByMariePierreLessard);
//Checked in console

// opgave 3 fjern mandarin og fersken igen
//Ref.:

// din kode her...
myFruitsByMariePierreLessard.splice(2, 2);
console.log(myFruitsByMariePierreLessard);
//Checked in console

//.........................................................

/* opgave 4 slice()
træk blomkål og spidskål ud af arrayen myVegetables
og ind i en ny array der hedder myCabbage*/
//Ref.: https://www.w3schools.com/jsref/jsref_slice_array.asp
//Notes:
// - "The slice() method selects from a given start, up to a (not inclusive) given end."
// - "The slice() method does not change the original array." (It creates a new array.)

// din kode her...
let myCabbageByMariePierreLessard = myVegetablesByMariePierreLessard.slice(1, 3);
console.log(myCabbageByMariePierreLessard);
//Checked in console

//.........................................................

/* opgave 5 concat()
 sæt arrays myFruits og myVegetables sammen i en ny array der hedder myYummies
 */
//Vocabulary: sammenføje, fusionere (to merge)
 //Ref.: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 //Notes: concat() does not change the order of items in either arrays. One array is put after the other. Unlike push(), concat creates a new array.

// din kode her...
let myYummiesByMariePierreLessard = myFruitsByMariePierreLessard.concat(myVegetablesByMariePierreLessard);
console.log(myYummiesByMariePierreLessard);
//Checked in console

//.........................................................

/* opgave 6 sort()
 sorter array  myYummies fra opgave 5
 */
//Ref.:
//Notes:
// - This sorts alphabetically, even if the items in the array are numbers. Numbers go after letters, but they are treated as words, not numbers.

// din kode her...
myYummiesByMariePierreLessard.sort();
console.log(myYummiesByMariePierreLessard);
//Checked in console

/* opgave 6 reverse()
 vend rækkefølgen på  array  myYummies fra opgave 6
 */
//Ref.:
//Notes:
// - This is not about reverse alphabetical order. It reverses the existing order, whichever it is!

// din kode her...
myYummiesByMariePierreLessard.reverse();
console.log(myYummiesByMariePierreLessard);
//Checked in console

//.........................................................

/* Opgave 7 */
/* let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
*/
let myNumbersByMariePierreLessard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//.........................................................

/* opgave 7 map()
 brug map funktionen på myNumbers, og skab en ny array, der hedder myNextNumbers hvor alle tal er 7 større end 
 tallene i myNumbers. 
 brug igen map funktionen på din nye array, myNextNumbers. og skab en ny array
  der hedder myLastNumbers der indeholder tal der er 12 gange så store som tallene i myNextNumbers.
 */
//Ref.:

// din kode her...
let myNextNumbersByMariePierreLessard = myNumbersByMariePierreLessard.map((x)=>{return x+7});
console.log(myNextNumbersByMariePierreLessard);
//Checked in console

let myLastNumbersByMariePierreLessard = myNextNumbersByMariePierreLessard.map((x)=>{return x*12});  
console.log(myLastNumbersByMariePierreLessard);
//Checked in console

//.........................................................

/* Opgave 8 */
/* let myNames = ['keld', 'søren', 'jens', 'tine', 'keld', 'ib', 'lene', 'keld', 'frederikke', 'line', 'kurt']; 
*/
let myNamesByMariePierreLessard = ['keld', 'søren', 'jens', 'tine', 'keld', 'ib', 'lene', 'keld', 'frederikke', 'line', 'kurt'];

//.........................................................
/* opgave 8 filter()
skriv en kode der kan give os en ny array, udfra myNames, hvor navnet keld ikke findes i.
*/
//Ref.:

let filteredNamesOtherThanKeldByMariePierreLessard = myNamesByMariePierreLessard.filter(excludeKeld);
function excludeKeld(name) {
    if(name != 'keld') { 
        return name;
    };
}; 
console.log(filteredNamesOtherThanKeldByMariePierreLessard);
//Checked in console     

//.........................................................


