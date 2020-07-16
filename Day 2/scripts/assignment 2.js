//question 1
//write a JS code which takes input from user and logs it in the console
let name=prompt("what is your name")
console.log(name);

//question 2
//explan with examples the remaining methods of string and array
//string methods
/*slice(start, [end]) Returns a substring of the string based on the “start” and 
“end” index arguments, NOT including the “end” index itself. “End” is optional, and if
 none is specified, the slice includes all characters from “start” to end of string.*/
 var text="Letsupgrade"
text.slice(0,4) //returns "Lets"
text.slice(2,4) //returns "ts"

/*substr(start, [length]) Returns the characters in a string beginning at “start”
 and through the specified number of characters, “length”. “Length” is optional, and if
  omitted, up to the end of the string is assumed.*/
  var text="excellent"
text.substring(0,4) //returns "exce"
text.substring(2,4) //returns "ce"

/*substring(from, [to]) Returns the characters in a string between “from” and “to” indexes,
 NOT including “to” inself. “To” is optional, and if omitted, up to the end of the string is 
 assumed.*/
 //substring(from, [to])
var myString = 'javascript FCS';
myString = myString.substring(0,10);
console.log(myString)
//output: javascript


/*replace(regexp/substr, replacetext) Searches and replaces the regular expression 
(or sub string) portion (match) with the replaced text instead.*/

//replace(substr, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(/JavaScript/i, "jQuery"));
//output: 999 jQuery Coders

//replace(regexp, replacetext)
var myString = '999 JavaScript Coders';
console.log(myString.replace(new RegExp( "999", "gi" ), "The"));
//output: The JavaScript Coders

//array methods
//The splice() method can be used to add new items to an array:

var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.splice(2, 0, "Lemon", "Kiwi"));

/*The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
The splice() method returns an array with the deleted items:*/

//Slicing an Array
/*The slice() method slices out a piece of an array into a new array.
This example slices out a part of an array starting from array element 1 ("Orange"):*/
var fruit = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruit.slice(1);
console.log(fruit);

//Array valueOf() Method
/*The valueOf() method returns the array.
This method is the default method of the array object. Array.valueOf() will return the same as Array*/
var e= ["Banana", "Orange", "Apple", "Mango"];
var v = e.valueOf();
console.log(e);

//Array toString() Method
//The toString() method returns a string with all the array values, separated by commas.
var d = ["Banana", "Orange", "Apple", "Mango"];
var x = d.toString();
console.log(d);

//Array sort() Method
/*he sort() method sorts the items of an array.
The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).
By default, the sort() method sorts the values as strings in alphabetical and ascending order.
This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
Because of this, the sort() method will produce an incorrect result when sorting numbers.*/
var c = ["Banana", "Orange", "Apple", "Mango"];
c.sort();
console.log(c);

//Array join() Method
/*The join() method returns the array as a string.
The elements will be separated by a specified separator. The default separator is comma (,).*/
var t = ["Banana", "Orange", "Apple", "Mango"];
var energy = t.join();
console.log(t);

//array length
//The length property sets or returns the number of elements in an array.

var l= ["Banana", "Orange", "Apple", "Mango"];
fruits.l;
console.log(l);

//question 3
//Ask  the user if he 21+ and log the value "Can drink","Cannot Drink"
var a=prompt("Enter the number:");
if(a>21)
{
    console.log("Can drink");
}else
{
    console.log("Cannot Drink");
}
