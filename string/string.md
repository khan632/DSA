A string in JavaScript is used to represent text.

WAY TO CREATE STRING
const a = "Hello";
const b = 'World';
const c = `Hello World`; // template literal

TYPE OF STRING:
typeof "hello"; // "string"
const s = new String("hello"); // object, not string avoid this 


1. Length of Last Word
Algo1 (using in-built method):

a. use trim to remove trailing spaces.
b. use split with on space
c. use backward loop, start count from end break loop once you encounter first space and return count
TC: o(n)
SC: o(n) 

Algo2 (using two loop): 
a. find length
b. start loop till length is greater than 0
c. decrease the lnegth till you encounter first char break
d. start loop again till length greater than 0
e. now check if first empty string come break but 
f. increase count and decrese length
g. return count outside loop
TC: o(n)
SC: o(1)

Algo (using one loop):
a. start a loop with length is greater and equal to 0
b. dcreaseing length when you have space 
c. increase count when encounter char 
d. break when you encounter space but count is greater than 1 
e. return count outside loop
TC: o(n)
SC: o(n)

2. First Unique Character in a String

Algo:
a. create a alphabet array of 26 size and fill it with zero
b. start a loop over that array and fill that index by converting using ascii value 
c. update that index by one
d. again start loop over string now find index using ascii code
e. check if at that index on array is index return that index
f. otherwise outside loop return -1

variation:
1. then can ask alphabet in string so return index's string
2. ...


