/* Quick Question #1
What does the following code return?

new Set([1,1,2,2,3,4]) */ 

/* A */ {1,2,3,4}

/* Quick Question #2
What does the following code return?

[...new Set("referee")].join("") */

/*A*/ "refe"

/* Quick Questions #3
What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); */  

/*A*/ Map {
  [1, 2, 3] => false
}


/* hasDuplicate
Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false */

 /*A:*/ const hasDuplicate = arr => new Set(arr).size !== arr.length



