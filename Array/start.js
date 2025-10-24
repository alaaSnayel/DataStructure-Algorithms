const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage

// we have many function in JS to use with arrays.
//push ==> add item in the end of array
strings.push("e"); //O(1)

//pop ==> remove the last item in the array
strings.pop(); //O(1)

//unshift ==> insert elements at the start of the array
strings.unshift("x"); //O(n)

//// splice ==> You can add an element anywhere in the array, either replacing an existing element or inserting it without deleting anything.
// 2 is The zero-based location in the array from which to start removing elements.
// 0 is The number of elements to remove.
// 'alien' is The Elements to insert into the array in place of the deleted elements.
strings.splice(2, 0, "alien"); //O(n)

console.log(strings);
